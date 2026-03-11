import { useCallback, useRef } from "react";

export function useSoundEffect() {
  const ctxRef = useRef<AudioContext | null>(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    return ctxRef.current;
  }, []);

  // ヘルパー: オシレーター+ゲインを作成
  const createTone = useCallback(
    (
      ctx: AudioContext,
      type: OscillatorType,
      freq: number,
      startTime: number,
      duration: number,
      volume: number,
    ) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(volume, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + duration);
      return { osc, gain };
    },
    [],
  );

  // 正解: 明るい上昇アルペジオ（ド→ミ→ソ→高ド）
  const playCorrect = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        createTone(ctx, "sine", freq, now + i * 0.1, 0.5, 0.18);
      });
    } catch {
      // 音声再生に失敗しても無視
    }
  }, [getCtx, createTone]);

  // 不正解: 低い不協和音が下降
  const playWrong = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.type = "sawtooth";
      osc2.type = "sawtooth";
      osc1.frequency.setValueAtTime(220, now);
      osc1.frequency.linearRampToValueAtTime(120, now + 0.6);
      osc2.frequency.setValueAtTime(233, now);
      osc2.frequency.linearRampToValueAtTime(127, now + 0.6);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.7);
      osc2.stop(now + 0.7);
    } catch {
      // 音声再生に失敗しても無視
    }
  }, [getCtx]);

  // 次の問題へ進む: 本家風の緊張感ある2音（低→高のシンセ音）
  const playNextQuestion = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;

      // パルス的な低音ヒット
      createTone(ctx, "triangle", 220, now, 0.15, 0.2);
      // 少し遅れて高めの音
      createTone(ctx, "triangle", 440, now + 0.12, 0.2, 0.15);
    } catch {
      // 音声再生に失敗しても無視
    }
  }, [getCtx, createTone]);

  // ファイナルアンサー確認: 本家風のドラマチックな緊張音
  const playFinalAnswer = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;

      // 低いドローン音（緊張感）
      const drone = ctx.createOscillator();
      const droneGain = ctx.createGain();
      drone.type = "sine";
      drone.frequency.value = 110;
      droneGain.gain.setValueAtTime(0, now);
      droneGain.gain.linearRampToValueAtTime(0.12, now + 0.2);
      droneGain.gain.setValueAtTime(0.12, now + 0.8);
      droneGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      drone.connect(droneGain);
      droneGain.connect(ctx.destination);
      drone.start(now);
      drone.stop(now + 1.2);

      // 上昇する緊張のハーモニクス
      const harmonics = [165, 220, 277.18];
      harmonics.forEach((freq, i) => {
        createTone(ctx, "sine", freq, now + 0.1 + i * 0.2, 0.6, 0.08);
      });
    } catch {
      // 音声再生に失敗しても無視
    }
  }, [getCtx, createTone]);

  // 回答選択時: 短い確認音
  const playSelect = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;
      createTone(ctx, "sine", 660, now, 0.12, 0.1);
    } catch {
      // 音声再生に失敗しても無視
    }
  }, [getCtx, createTone]);

  // タイムリミット的な緊迫音（難問時のBGM的な短いループ）
  const playTension = useCallback(() => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;

      // 心臓の鼓動のような低音パルス
      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 80;
        gain.gain.setValueAtTime(0, now + i * 0.5);
        gain.gain.linearRampToValueAtTime(0.15, now + i * 0.5 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.5 + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.5);
        osc.stop(now + i * 0.5 + 0.25);
      }
    } catch {
      // 音声再生に失敗しても無視
    }
  }, [getCtx]);

  return {
    playCorrect,
    playWrong,
    playNextQuestion,
    playFinalAnswer,
    playSelect,
    playTension,
  };
}
