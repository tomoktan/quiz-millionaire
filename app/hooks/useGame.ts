import { useState, useCallback, useMemo } from "react";
import { Question, GameState, LifelineType, Lang } from "../types";
import { PRIZE_TABLE } from "../data/prizes";

const initialState: GameState = {
  currentQuestionIndex: 0,
  selectedAnswer: null,
  isAnswerRevealed: false,
  usedLifelines: { fiftyFifty: false, audience: false, phone: false },
  eliminatedAnswers: [],
  audienceResults: null,
  phoneHint: null,
  gameStatus: "start",
  showFinalAnswer: false,
  isLoading: false,
};

export function useGame() {
  const [state, setState] = useState<GameState>(initialState);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [lang, setLang] = useState<Lang>("ja");

  const currentQuestion = questions[state.currentQuestionIndex] ?? null;

  const currentQuestionText = useMemo(() => {
    if (!currentQuestion) return "";
    return lang === "ja"
      ? currentQuestion.question_ja
      : currentQuestion.question_en;
  }, [currentQuestion, lang]);

  const currentAnswers = useMemo(() => {
    if (!currentQuestion) return [];
    return lang === "ja"
      ? currentQuestion.answers_ja
      : currentQuestion.answers_en;
  }, [currentQuestion, lang]);

  const currentPrize = useMemo(() => {
    if (state.currentQuestionIndex === 0) return "0円";
    return PRIZE_TABLE[state.currentQuestionIndex - 1].amount;
  }, [state.currentQuestionIndex]);

  const guaranteedPrize = useMemo(() => {
    for (let i = state.currentQuestionIndex - 1; i >= 0; i--) {
      if (PRIZE_TABLE[i].isSafetyNet) {
        return PRIZE_TABLE[i].amount;
      }
    }
    return "0円";
  }, [state.currentQuestionIndex]);

  const startGame = useCallback(async (startLang: Lang = "ja") => {
    setLang(startLang);
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch("/api/questions");
      if (!res.ok) throw new Error("問題取得失敗");
      const newQuestions: Question[] = await res.json();
      setQuestions(newQuestions);
      setState({ ...initialState, gameStatus: "playing" });
    } catch {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const selectAnswer = useCallback(
    (index: number) => {
      if (state.selectedAnswer !== null || state.isAnswerRevealed) return;
      setState((prev) => ({
        ...prev,
        selectedAnswer: index,
        showFinalAnswer: true,
      }));
    },
    [state.selectedAnswer, state.isAnswerRevealed],
  );

  const confirmFinalAnswer = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showFinalAnswer: false,
      isAnswerRevealed: true,
    }));
  }, []);

  const cancelFinalAnswer = useCallback(() => {
    setState((prev) => ({
      ...prev,
      selectedAnswer: null,
      showFinalAnswer: false,
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (!currentQuestion) return;

    const isCorrect = state.selectedAnswer === currentQuestion.correctIndex;

    if (!isCorrect) {
      setState((prev) => ({ ...prev, gameStatus: "gameover" }));
      return;
    }

    if (state.currentQuestionIndex === 14) {
      setState((prev) => ({ ...prev, gameStatus: "cleared" }));
      return;
    }

    setState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      selectedAnswer: null,
      isAnswerRevealed: false,
      eliminatedAnswers: [],
      audienceResults: null,
      phoneHint: null,
    }));
  }, [currentQuestion, state.selectedAnswer, state.currentQuestionIndex]);

  const dropout = useCallback(() => {
    setState((prev) => ({ ...prev, gameStatus: "gameover" }));
  }, []);

  const useFiftyFifty = useCallback(() => {
    if (state.usedLifelines.fiftyFifty || !currentQuestion) return;

    const wrongAnswers = [0, 1, 2, 3].filter(
      (i) => i !== currentQuestion.correctIndex,
    );
    const shuffled = wrongAnswers.sort(() => Math.random() - 0.5);
    const toEliminate = shuffled.slice(0, 2);

    setState((prev) => ({
      ...prev,
      usedLifelines: { ...prev.usedLifelines, fiftyFifty: true },
      eliminatedAnswers: toEliminate,
    }));
  }, [state.usedLifelines.fiftyFifty, currentQuestion]);

  const useAudience = useCallback(() => {
    if (state.usedLifelines.audience || !currentQuestion) return;

    const results = [0, 0, 0, 0];
    const correctIdx = currentQuestion.correctIndex;

    const baseCorrectRate =
      currentQuestion.difficulty === "easy"
        ? 70
        : currentQuestion.difficulty === "medium"
          ? 50
          : 35;

    const correctRate = baseCorrectRate + Math.floor(Math.random() * 15) - 5;
    results[correctIdx] = correctRate;

    let remaining = 100 - correctRate;
    for (let i = 0; i < 4; i++) {
      if (i === correctIdx) continue;
      if (state.eliminatedAnswers.includes(i)) {
        results[i] = 0;
        continue;
      }
      const portion =
        i === 3 || (i === 2 && state.eliminatedAnswers.includes(3))
          ? remaining
          : Math.floor(Math.random() * remaining);
      results[i] = portion;
      remaining -= portion;
    }

    setState((prev) => ({
      ...prev,
      usedLifelines: { ...prev.usedLifelines, audience: true },
      audienceResults: results,
    }));
  }, [state.usedLifelines.audience, currentQuestion, state.eliminatedAnswers]);

  const usePhone = useCallback(() => {
    if (state.usedLifelines.phone || !currentQuestion) return;

    const answers =
      lang === "ja" ? currentQuestion.answers_ja : currentQuestion.answers_en;
    const correctRate =
      currentQuestion.difficulty === "easy"
        ? 1.0
        : currentQuestion.difficulty === "medium"
          ? 0.85
          : 0.7;
    const isWrong = Math.random() >= correctRate;
    let answer: string;
    if (isWrong) {
      const wrongIndices = [0, 1, 2, 3].filter(
        (i) =>
          i !== currentQuestion.correctIndex &&
          !state.eliminatedAnswers.includes(i),
      );
      const wrongIndex =
        wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
      answer = answers[wrongIndex];
    } else {
      answer = answers[currentQuestion.correctIndex];
    }
    const hints =
      lang === "ja"
        ? [
            `うーん、たぶん「${answer}」だと思うよ。`,
            `私は「${answer}」だと確信しているわ！`,
            `難しいけど...「${answer}」じゃないかな？`,
            `調べたことがあるんだけど、「${answer}」が正解のはずだよ。`,
            `自信はないけど、「${answer}」だと思う...`,
          ]
        : [
            `Hmm, I think it's "${answer}".`,
            `I'm pretty sure it's "${answer}"!`,
            `It's tough, but... I'd go with "${answer}".`,
            `I've looked this up before — it should be "${answer}".`,
            `I'm not 100% sure, but I think it's "${answer}"...`,
          ];
    const hint = hints[Math.floor(Math.random() * hints.length)];

    setState((prev) => ({
      ...prev,
      usedLifelines: { ...prev.usedLifelines, phone: true },
      phoneHint: hint,
    }));
  }, [
    state.usedLifelines.phone,
    currentQuestion,
    lang,
    state.eliminatedAnswers,
  ]);

  const useLifeline = useCallback(
    (type: LifelineType) => {
      switch (type) {
        case "fiftyFifty":
          useFiftyFifty();
          break;
        case "audience":
          useAudience();
          break;
        case "phone":
          usePhone();
          break;
      }
    },
    [useFiftyFifty, useAudience, usePhone],
  );

  const resetGame = useCallback(() => {
    setState(initialState);
    setQuestions([]);
  }, []);

  return {
    ...state,
    lang,
    setLang,
    currentQuestion,
    currentQuestionText,
    currentAnswers,
    currentPrize,
    guaranteedPrize,
    questions,
    startGame,
    selectAnswer,
    confirmFinalAnswer,
    cancelFinalAnswer,
    nextQuestion,
    dropout,
    useLifeline,
    resetGame,
  };
}
