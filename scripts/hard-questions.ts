export const hardQuestions = [
  // 世界史の深い知識 (1-10)
  {
    question: "1648年に締結され、三十年戦争を終結させた条約は何と呼ばれるか？",
    answers: [
      "ユトレヒト条約",
      "アウクスブルクの和議",
      "ナントの勅令",
      "ウェストファリア条約",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ビザンツ帝国（東ローマ帝国）が滅亡した1453年、コンスタンティノープルを陥落させたオスマン帝国のスルタンは誰か？",
    answers: ["メフメト2世", "セリム1世", "スレイマン1世", "バヤズィト1世"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "古代メソポタミアのシュメール文明で使用されていた楔形文字が最初に記録された粘土板の用途は主に何だったか？",
    answers: [
      "宗教的な祈祷文",
      "王の業績の記録",
      "経済取引の記録",
      "天文観測の記録",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "フランス革命期に恐怖政治を主導し、「清廉の人」と呼ばれた人物は誰か？",
    answers: [
      "ジョルジュ・ダントン",
      "カミーユ・デムーラン",
      "マクシミリアン・ロベスピエール",
      "ジャン＝ポール・マラー",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "紀元前331年、アレクサンドロス大王がペルシア帝国のダレイオス3世を決定的に破った戦いは何か？",
    answers: [
      "イッソスの戦い",
      "ガウガメラの戦い",
      "グラニコス川の戦い",
      "ヒュダスペス河畔の戦い",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "中世ヨーロッパで「叙任権闘争」が起こった際、教皇グレゴリウス7世と対立した神聖ローマ皇帝は誰か？",
    answers: ["フリードリヒ1世", "オットー1世", "カール5世", "ハインリヒ4世"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "1884年〜1885年に開催され、アフリカ大陸の植民地分割を列強が協議した国際会議はどこで開かれたか？",
    answers: ["ベルリン", "パリ", "ウィーン", "ロンドン"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "オスマン帝国で1876年に制定された最初の憲法（ミドハト憲法）を起草した大宰相は誰か？",
    answers: [
      "タンジマートの勅令起草者レシト・パシャ",
      "ミドハト・パシャ",
      "アリー・パシャ",
      "フアト・パシャ",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "モンゴル帝国の最大版図を築いた第5代大ハーンは誰か？",
    answers: [
      "オゴデイ・ハーン",
      "クビライ・ハーン",
      "モンケ・ハーン",
      "グユク・ハーン",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "古代ローマで「五賢帝」の最後の皇帝とされるのは誰か？",
    answers: [
      "トラヤヌス",
      "ハドリアヌス",
      "アントニヌス・ピウス",
      "マルクス・アウレリウス",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },

  // 科学史・物理学・量子力学 (11-20)
  {
    question:
      "量子電磁力学（QED）の発展に貢献し、ファインマン・ダイアグラムを考案した物理学者は誰か？",
    answers: [
      "ポール・ディラック",
      "ジュリアン・シュウィンガー",
      "朝永振一郎",
      "リチャード・ファインマン",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "超弦理論において、物理的に整合性のある理論が成立するために必要とされる時空の次元数は何次元か？",
    answers: ["10次元", "11次元", "26次元", "4次元"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "1905年にアインシュタインが発表した「奇跡の年」の論文に含まれないものはどれか？",
    answers: [
      "光電効果の理論",
      "一般相対性理論",
      "特殊相対性理論",
      "ブラウン運動の理論",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "ボーズ＝アインシュタイン凝縮が実験的に初めて実現されたのは何年か？",
    answers: ["1985年", "1990年", "1995年", "2001年"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "素粒子物理学の「標準模型」において、質量の起源を説明するヒッグス粒子の存在が実験的に確認されたのはどの加速器か？",
    answers: [
      "テバトロン（フェルミ国立加速器研究所）",
      "スタンフォード線形加速器（SLAC）",
      "DESY（ドイツ電子シンクロトロン）",
      "大型ハドロン衝突型加速器（LHC）",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "マックス・プランクが黒体放射の問題を解決するために導入した物理定数の正式名称は何か？",
    answers: [
      "プランク定数",
      "ボルツマン定数",
      "ディラック定数",
      "アボガドロ定数",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "1911年にオランダの物理学者カメルリング・オネスが発見した現象は何か？",
    answers: ["超流動", "ホール効果", "超伝導", "ゼーマン効果"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "EPRパラドックスの「EPR」は3人の物理学者の頭文字だが、Rは誰を指すか？",
    answers: ["ラザフォード", "ローゼン", "ラマン", "レントゲン"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "ノーベル物理学賞を2度受賞した唯一の人物は誰か？",
    answers: [
      "マリー・キュリー",
      "リチャード・ファインマン",
      "ライナス・ポーリング",
      "ジョン・バーディーン",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ベルの不等式の破れを実験的に示し、2022年にノーベル物理学賞を受賞したフランスの物理学者は誰か？",
    answers: [
      "アラン・アスペ",
      "ジョン・クラウザー",
      "アントン・ツァイリンガー",
      "デイヴィッド・ボーム",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },

  // 哲学・思想 (21-30)
  {
    question: "「実存は本質に先立つ」という命題を提唱した哲学者は誰か？",
    answers: [
      "マルティン・ハイデガー",
      "アルベール・カミュ",
      "ジャン＝ポール・サルトル",
      "シモーヌ・ド・ボーヴォワール",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "イマヌエル・カントの三大批判書に含まれないものはどれか？",
    answers: ["純粋理性批判", "実践理性批判", "判断力批判", "弁証法的理性批判"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "「パノプティコン（一望監視装置）」の概念を提唱したイギリスの思想家は誰か？",
    answers: [
      "ジョン・ロック",
      "ジョン・スチュアート・ミル",
      "トマス・ホッブズ",
      "ジェレミー・ベンサム",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "古代ギリシャの哲学者で、「万物は流転する（パンタ・レイ）」という言葉で知られるのは誰か？",
    answers: [
      "ヘラクレイトス",
      "デモクリトス",
      "パルメニデス",
      "エンペドクレス",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "ルートヴィヒ・ウィトゲンシュタインの前期の主著のタイトルは何か？",
    answers: ["哲学探究", "確実性の問題", "論理哲学論考", "青色本と茶色本"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "ミシェル・フーコーの著作『監獄の誕生』の副題は何か？",
    answers: ["規律と処罰", "知の考古学", "狂気の歴史", "性の歴史"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question: "「永劫回帰」の思想を提唱したドイツの哲学者は誰か？",
    answers: [
      "アルトゥル・ショーペンハウアー",
      "フリードリヒ・ニーチェ",
      "ゲオルク・ヴィルヘルム・フリードリヒ・ヘーゲル",
      "マルティン・ハイデガー",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "古代中国の思想家・荀子の人間観を表す有名な主張はどれか？",
    answers: ["性善説", "性無善無悪説", "性三品説", "性悪説"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ジャック・デリダが提唱した、西洋形而上学の伝統を批判する概念は何か？",
    answers: [
      "脱構築（デコンストラクション）",
      "構造主義",
      "現象学的還元",
      "言語ゲーム",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "『正義論』を著し、「無知のヴェール」の概念で知られるアメリカの政治哲学者は誰か？",
    answers: [
      "マイケル・サンデル",
      "ジョン・ロールズ",
      "ロバート・ノージック",
      "アマルティア・セン",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },

  // 文学（ノーベル文学賞、世界文学） (31-40)
  {
    question: "ノーベル文学賞を受賞した最初のアジア人作家は誰か？",
    answers: ["川端康成", "大江健三郎", "ラビンドラナート・タゴール", "莫言"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "ジェイムズ・ジョイスの小説『ユリシーズ』の舞台となっている都市はどこか？",
    answers: ["ダブリン", "パリ", "ロンドン", "ニューヨーク"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "マルセル・プルーストの大作『失われた時を求めて』の第1巻のタイトルは何か？",
    answers: [
      "花咲く乙女たちのかげに",
      "ゲルマントのほう",
      "見出された時",
      "スワン家のほうへ",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "フョードル・ドストエフスキーの『カラマーゾフの兄弟』で、父親殺しの罪で有罪判決を受けた兄弟は誰か？",
    answers: ["イワン", "アリョーシャ", "ドミートリー", "スメルジャコフ"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "ガブリエル・ガルシア＝マルケスの代表作『百年の孤独』に登場する架空の町の名前は何か？",
    answers: ["コマラ", "マコンド", "ヨクナパトーファ", "サンタ・マリア"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "2017年にノーベル文学賞を受賞した日系イギリス人作家は誰か？",
    answers: ["村上春樹", "大江健三郎", "多和田葉子", "カズオ・イシグロ"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ダンテ・アリギエーリの『神曲』で、地獄篇において主人公ダンテを案内する詩人は誰か？",
    answers: ["ウェルギリウス", "オウィディウス", "ホメロス", "ホラティウス"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question: "トーマス・マンの小説『魔の山』の舞台となっている施設は何か？",
    answers: ["大学", "サナトリウム（療養所）", "修道院", "城"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "ホルヘ・ルイス・ボルヘスの短編集『伝奇集』に収録されている、無限の図書館を描いた作品のタイトルは何か？",
    answers: [
      "アレフ",
      "八岐の園",
      "バベルの図書館",
      "トレーン、ウクバール、オルビス・テルティウス",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "ウィリアム・フォークナーが作品の舞台として創造した架空の郡の名前は何か？",
    answers: [
      "ウェセックス",
      "ウィネスバーグ",
      "マコム郡",
      "ヨクナパトーファ郡",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },

  // 数学（定理・予想） (41-50)
  {
    question:
      "2003年にグリゴリー・ペレルマンが証明した、クレイ数学研究所のミレニアム懸賞問題の一つは何か？",
    answers: ["リーマン予想", "P≠NP予想", "ポアンカレ予想", "ホッジ予想"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "フェルマーの最終定理を1995年に証明した数学者は誰か？",
    answers: [
      "アンドリュー・ワイルズ",
      "テレンス・タオ",
      "グリゴリー・ペレルマン",
      "ピーター・ショルツェ",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "「すべての偶数は2つの素数の和で表せる」という未証明の予想は何と呼ばれるか？",
    answers: [
      "リーマン予想",
      "双子素数の予想",
      "コラッツの予想",
      "ゴールドバッハの予想",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ゲーデルの不完全性定理が示した内容として最も正確なものはどれか？",
    answers: [
      "数学は矛盾している",
      "自然数論を含む無矛盾な公理系は、その体系内で証明も反証もできない命題を含む",
      "すべての数学的命題は証明可能である",
      "数学の公理は一意に定まる",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "オイラーが1736年に解いた「ケーニヒスベルクの橋の問題」は、どの数学分野の始まりとされるか？",
    answers: ["微積分学", "確率論", "集合論", "グラフ理論"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ガロア理論の創始者エヴァリスト・ガロアが亡くなった年齢は何歳か？",
    answers: ["20歳", "18歳", "25歳", "32歳"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question: "カントールが証明した「対角線論法」で示されたことは何か？",
    answers: [
      "自然数は有限個である",
      "すべての無限集合は同じ大きさである",
      "実数の集合は自然数の集合より真に大きい（非可算無限である）",
      "有理数は非可算無限である",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "4色定理（すべての平面地図は4色で塗り分けられる）が証明された年はいつか？",
    answers: ["1952年", "1976年", "1968年", "1994年"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "ラマヌジャンが発見し、ハーディとの共同研究で知られる数「1729」の特徴は何か？",
    answers: [
      "最小の完全数",
      "最小のカーマイケル数",
      "2通りの方法で2つの立方数の和として表せる最小の数",
      "最大の双子素数の一方",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "「連続体仮説」とは何についての仮説か？",
    answers: [
      "自然数と実数の間の濃度を持つ集合が存在しないという仮説",
      "宇宙の構造に関する仮説",
      "すべての素数が等間隔に分布するという仮説",
      "無限級数の収束に関する仮説",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },

  // 地理（マニアック） (51-60)
  {
    question:
      "世界で最も深い湖であるバイカル湖の最大水深はおよそ何メートルか？",
    answers: ["約892m", "約1,186m", "約1,642m", "約2,015m"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "アフリカ大陸で面積が最大の国はどこか？",
    answers: ["コンゴ民主共和国", "アルジェリア", "スーダン", "リビア"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "世界で最も長い地名として知られるタイの首都バンコクの正式名称は何文字（タイ語）あるとされるか？",
    answers: ["約50文字", "約100文字", "約170文字", "約250文字"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "マリアナ海溝のチャレンジャー海淵の深さはおよそ何メートルか？",
    answers: ["約8,848m", "約10,920m", "約12,500m", "約15,000m"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "世界で唯一、国旗が正方形でない（長方形でもない）国はどこか？",
    answers: ["ネパール", "スイス", "バチカン市国", "モナコ"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question: "レソト王国の地理的特徴として正しいものはどれか？",
    answers: [
      "島国である",
      "赤道直下に位置する",
      "国土全体が海抜1,000m以上にある",
      "2つの国に囲まれた内陸国である",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "世界最大の砂漠はどれか？",
    answers: ["サハラ砂漠", "南極大陸", "ゴビ砂漠", "アラビア砂漠"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "太平洋の「マリアナ海溝」がある海域に最も近い島はどれか？",
    answers: ["パラオ", "サイパン", "ミクロネシア連邦", "グアム"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question: "カスピ海に面している国の数はいくつか？",
    answers: ["3か国", "4か国", "5か国", "6か国"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "世界で最も乾燥した場所として知られるチリのアタカマ砂漠では、一部の地域で何年間も雨が降らなかったとされるか？",
    answers: ["約50年", "約400年", "約100年", "約1,000年"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },

  // 医学・生物学の専門知識 (61-70)
  {
    question: "ヒトのゲノムに含まれる塩基対の数はおよそいくつか？",
    answers: ["約3,000万", "約3億", "約30億", "約300億"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "PCR法（ポリメラーゼ連鎖反応）を発明し、ノーベル化学賞を受賞した科学者は誰か？",
    answers: [
      "ジェームズ・ワトソン",
      "フランシス・クリック",
      "ロザリンド・フランクリン",
      "キャリー・マリス",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ミトコンドリアDNAが母系遺伝する理由として最も適切なものはどれか？",
    answers: [
      "受精時に精子のミトコンドリアが分解されるから",
      "父親のミトコンドリアは精子に含まれないから",
      "ミトコンドリアDNAはX染色体にのみ存在するから",
      "父親のミトコンドリアは機能しないから",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "CRISPR-Cas9ゲノム編集技術の開発で2020年にノーベル化学賞を受賞した2人の科学者のうち、フランス出身の研究者は誰か？",
    answers: [
      "ジェニファー・ダウドナ",
      "エマニュエル・シャルパンティエ",
      "フェン・チャン",
      "ジョージ・チャーチ",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "プリオン病の原因となるプリオンタンパク質の特徴として正しいものはどれか？",
    answers: [
      "DNAを持つウイルスの一種である",
      "RNAのみで構成される感染因子である",
      "特殊な細菌の一種である",
      "核酸を持たない異常な構造のタンパク質である",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question: "ヒトの体内で最も長い細胞はどれか？",
    answers: ["神経細胞（坐骨神経）", "筋細胞", "赤血球", "卵細胞"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "テロメアの発見と「テロメラーゼ」の研究で2009年にノーベル生理学・医学賞を受賞した研究者に含まれないのは誰か？",
    answers: [
      "エリザベス・ブラックバーン",
      "キャロル・グライダー",
      "山中伸弥",
      "ジャック・ショスタク",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "ヒトの免疫系において、「抗体」を産生する細胞は何か？",
    answers: ["T細胞", "B細胞（形質細胞）", "マクロファージ", "NK細胞"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "エピジェネティクスにおいて、遺伝子発現を抑制する代表的な化学修飾は何か？",
    answers: [
      "DNAのリン酸化",
      "ヒストンの糖鎖付加",
      "RNAのアセチル化",
      "DNAのメチル化",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "生物の分類体系を「界・門・綱・目・科・属・種」に整備した博物学者は誰か？",
    answers: [
      "チャールズ・ダーウィン",
      "ジョルジュ・キュヴィエ",
      "カール・フォン・リンネ",
      "ジャン＝バティスト・ラマルク",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },

  // 芸術（クラシック音楽、絵画、建築） (71-80)
  {
    question:
      "バッハの『マタイ受難曲』を19世紀に再演し、バッハ復興の立役者となった作曲家は誰か？",
    answers: [
      "ロベルト・シューマン",
      "フランツ・リスト",
      "フェリックス・メンデルスゾーン",
      "ヨハネス・ブラームス",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "ピカソの絵画『ゲルニカ』は、どの戦争中の出来事を題材にしているか？",
    answers: ["スペイン内戦", "第一次世界大戦", "第二次世界大戦", "朝鮮戦争"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "サグラダ・ファミリアの設計者アントニ・ガウディが建築に取り入れた幾何学的形状として特徴的なものはどれか？",
    answers: ["放物線", "正多角形", "フラクタル", "カテナリー曲線（懸垂線）"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "グスタフ・マーラーの交響曲は全部で何曲あるか（未完成の第10番を含めない場合）？",
    answers: ["7曲", "9曲", "8曲", "11曲"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "レンブラントの代表作『夜警』に描かれているのは何の場面か？",
    answers: ["戦場の夜襲", "王宮の宴会", "市民自警団の出動", "宗教的な礼拝"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "ストラヴィンスキーのバレエ音楽『春の祭典』が初演された1913年のパリで何が起こったか？",
    answers: [
      "観客が感動して総立ちになった",
      "公演が中止された",
      "批評家から絶賛された",
      "観客が暴動を起こした",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "フランク・ロイド・ライトが設計した「落水荘（フォーリングウォーター）」がある米国の州はどこか？",
    answers: [
      "ペンシルベニア州",
      "イリノイ州",
      "ニューヨーク州",
      "ウィスコンシン州",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "フェルメールの代表作『真珠の耳飾りの少女』が所蔵されている美術館はどこか？",
    answers: [
      "アムステルダム国立美術館",
      "ルーヴル美術館",
      "マウリッツハイス美術館",
      "メトロポリタン美術館",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "ドビュッシーの管弦楽作品『牧神の午後への前奏曲』は、誰の詩に着想を得て作曲されたか？",
    answers: [
      "ステファヌ・マラルメ",
      "アルチュール・ランボー",
      "ポール・ヴェルレーヌ",
      "シャルル・ボードレール",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "ゴシック建築の代表例であるノートルダム大聖堂（パリ）の建設が開始された世紀はいつか？",
    answers: ["10世紀", "14世紀", "12世紀", "16世紀"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },

  // 日本の歴史・政治の深い知識 (81-90)
  {
    question:
      "大化の改新（645年）で蘇我入鹿を暗殺した中心人物は中大兄皇子と誰か？",
    answers: ["蘇我馬子", "物部守屋", "中臣鎌足", "大伴家持"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "日本国憲法の草案作成に中心的な役割を果たしたGHQの部署はどこか？",
    answers: [
      "参謀第二部（G2）",
      "民政局（GS）",
      "経済科学局（ESS）",
      "民間情報教育局（CIE）",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "承久の乱（1221年）で後鳥羽上皇の討幕軍を破った鎌倉幕府の実質的指導者は誰か？",
    answers: ["北条義時", "源頼朝", "北条時宗", "足利尊氏"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question: "江戸時代の「寛政の改革」を主導した老中は誰か？",
    answers: ["田沼意次", "水野忠邦", "徳川吉宗", "松平定信"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question: "日本で最初の政党内閣を組閣した首相は誰か？",
    answers: ["原敬", "伊藤博文", "大隈重信", "板垣退助"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "律令制における「班田収授法」で、口分田が支給される対象の年齢は何歳以上だったか？",
    answers: ["5歳以上", "6歳以上", "10歳以上", "15歳以上"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question:
      "戦国時代、長篠の戦い（1575年）で織田・徳川連合軍が破った武将は誰か？",
    answers: ["上杉謙信", "武田信玄", "今川義元", "武田勝頼"],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question: "明治維新後の「岩倉使節団」が出発した年はいつか？",
    answers: ["1868年", "1877年", "1871年", "1889年"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "日本の「五・一五事件」（1932年）で暗殺された首相は誰か？",
    answers: ["浜口雄幸", "高橋是清", "犬養毅", "若槻禮次郎"],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "平安時代に『源氏物語』を著した紫式部が仕えていた中宮は誰か？",
    answers: ["彰子", "定子", "威子", "嬉子"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },

  // 言語学・語源 (91-100)
  {
    question:
      "インド・ヨーロッパ語族の存在を最初に体系的に提唱した言語学者は誰か？",
    answers: [
      "フェルディナン・ド・ソシュール",
      "ノーム・チョムスキー",
      "ヤーコプ・グリム",
      "ウィリアム・ジョーンズ",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "ノーム・チョムスキーが提唱した「普遍文法」の概念において、人間の言語能力はどのようなものとされるか？",
    answers: [
      "後天的に学習される技能",
      "生得的に備わっている能力",
      "文化的に伝達される知識",
      "模倣によって獲得される習慣",
    ],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "ロゼッタ・ストーンの解読に成功したフランスの言語学者は誰か？",
    answers: [
      "ヴォルテール",
      "レヴィ＝ストロース",
      "シャンポリオン",
      "ソシュール",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question: "日本語の五十音図を体系化したとされる、平安時代の僧侶は誰か？",
    answers: ["明覚", "空海", "最澄", "法然"],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "「シニフィアン（記号表現）」と「シニフィエ（記号内容）」の概念を提唱した言語学者は誰か？",
    answers: [
      "ロマーン・ヤーコブソン",
      "チャールズ・サンダース・パース",
      "レナード・ブルームフィールド",
      "フェルディナン・ド・ソシュール",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question: "世界で最も話者数の多い言語は何か（母語話者数基準）？",
    answers: ["英語", "中国語（官話）", "スペイン語", "ヒンディー語"],
    correctIndex: 1,
    difficulty: "hard" as const,
  },
  {
    question: "エスペラント語を1887年に創案した人物は誰か？",
    answers: [
      "ヨハン・マルティン・シュライヤー",
      "ジュゼッペ・ペアノ",
      "ルドヴィコ・ザメンホフ",
      "エドガー・ド・ヴァール",
    ],
    correctIndex: 2,
    difficulty: "hard" as const,
  },
  {
    question:
      "線文字Bの解読に成功し、それがギリシャ語の初期形態であることを示した研究者は誰か？",
    answers: [
      "アーサー・エヴァンズ",
      "ハインリヒ・シュリーマン",
      "アラン・チューリング",
      "マイケル・ヴェントリス",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
  {
    question:
      "「サピア＝ウォーフの仮説」が主張する内容として最も適切なものはどれか？",
    answers: [
      "言語の構造が思考や世界認識に影響を与える",
      "すべての言語は共通の祖語から派生した",
      "言語は生物学的に決定されている",
      "すべての言語には同じ文法構造がある",
    ],
    correctIndex: 0,
    difficulty: "hard" as const,
  },
  {
    question:
      "古代メソポタミアで使われたシュメール語は、現在知られている言語分類上どのような位置づけか？",
    answers: [
      "セム語族に属する",
      "インド・ヨーロッパ語族に属する",
      "ウラル語族に属する",
      "孤立語（系統不明の言語）である",
    ],
    correctIndex: 3,
    difficulty: "hard" as const,
  },
];
