// デモ用データ：掲載者・数値・店舗はすべて架空。外部リンクは全てプレースホルダ（#）。
const PEOPLE = [
  {
    id: 1, name: "りお", area: "銀座", age: 26,
    tags: ["アロマ", "オイル", "深夜OK"],
    stars: 5, likes: 128, views: 2480,
    updatedMin: 40, updatedLabel: "本日 14:50 更新",
    joinedDays: 21, mood: "🌿", streak: 5,
    shop: "サロン・フィオーレ銀座（架空）",
    height: "162cm", job: "セラピスト", work: "フリー（店舗所属なし）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "写メ日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-01", title: "11/1 本日の空き状況（外部ページ）", url: "#" },
      { date: "2026-10-31", title: "10/31 ハロウィンの夜に", url: "#" },
      { date: "2026-10-29", title: "10/29 新しいアロマが届きました", url: "#" },
      { date: "2026-10-27", title: "10/27 雨の日の過ごし方", url: "#" }
    ],
    photos: ["images/p1-a.jpg", "images/p1-b.jpg"]
  },
  {
    id: 2, name: "みゆ", area: "新宿", age: 24,
    tags: ["リンパ", "ヘッドスパ"],
    stars: 4, likes: 86, views: 1730,
    updatedMin: 130, updatedLabel: "本日 13:05 更新",
    joinedDays: 3, mood: "☀️", streak: 3,
    shop: "メゾンロゼ新宿（架空）",
    height: "158cm", job: "セラピスト", work: "フリー（店舗所属なし）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "写メ日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-01", title: "11/1 週末のご案内（外部ページ）", url: "#" },
      { date: "2026-10-30", title: "10/30 ヘッドスパのすすめ", url: "#" },
      { date: "2026-10-28", title: "10/28 お客様の声まとめ", url: "#" }
    ],
    photos: ["images/p2-a.jpg", "images/p2-b.jpg"]
  },
  {
    id: 3, name: "さくら", area: "六本木", age: 28,
    tags: ["整体", "ストレッチ", "指圧"],
    stars: 5, likes: 203, views: 3120,
    updatedMin: 300, updatedLabel: "本日 10:20 更新",
    joinedDays: 45, mood: "🍵", streak: 2,
    shop: "サロン・セレッソ六本木（架空）",
    height: "165cm", job: "セラピスト", work: "フリー（店舗所属なし）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "写メ日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-01", title: "11/1 午前中の枠について（外部ページ）", url: "#" },
      { date: "2026-10-31", title: "10/31 10月ありがとうございました", url: "#" },
      { date: "2026-10-26", title: "10/26 ストレッチ講座の記録", url: "#" }
    ],
    photos: ["images/p3-a.jpg", "images/p3-b.jpg"]
  },
  {
    id: 4, name: "あかり", area: "池袋", age: 23,
    tags: ["アロマ", "ホットストーン"],
    stars: 4, likes: 57, views: 980,
    updatedMin: 1500, updatedLabel: "昨日 21:40 更新",
    joinedDays: 12, mood: "🌙", streak: 1,
    shop: "メゾンクレール池袋（架空）",
    height: "155cm", job: "セラピスト", work: "フリー（店舗所属なし）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "写メ日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-10-31", title: "10/31 夜の部スタート（外部ページ）", url: "#" },
      { date: "2026-10-29", title: "10/29 温活のすすめ", url: "#" },
      { date: "2026-10-25", title: "10/25 自己紹介を更新しました", url: "#" }
    ],
    photos: ["images/p4-a.jpg", "images/p4-b.jpg"]
  },
  {
    id: 5, name: "かえで", area: "渋谷", age: 27,
    tags: ["リフレクソロジー", "読書好き"],
    stars: 3, likes: 41, views: 760,
    updatedMin: 2900, updatedLabel: "10/30 18:15 更新",
    joinedDays: 60, mood: "📚", streak: 0,
    shop: "ミルフィーユ渋谷（架空）",
    height: "160cm", job: "セラピスト", work: "フリー（店舗所属なし）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "写メ日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-10-30", title: "10/30 カフェで読書（外部ページ）", url: "#" },
      { date: "2026-10-27", title: "10/27 足つぼ豆知識", url: "#" }
    ],
    photos: ["images/p5-a.jpg", "images/p5-b.jpg"]
  },
  {
    id: 6, name: "ゆき", area: "恵比寿", age: 25,
    tags: ["オイル", "夜型", "フェイシャル"],
    stars: 5, likes: 167, views: 2210,
    updatedMin: 75, updatedLabel: "本日 14:15 更新",
    joinedDays: 7, mood: "✨", streak: 4,
    shop: "サロン・ルーチェ恵比寿（架空）",
    height: "163cm", job: "セラピスト", work: "フリー（店舗所属なし）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "写メ日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-01", title: "11/1 今夜の空き状況（外部ページ）", url: "#" },
      { date: "2026-10-31", title: "10/31 夜景とフェイシャル", url: "#" },
      { date: "2026-10-28", title: "10/28 スキンケアの記録", url: "#" },
      { date: "2026-10-24", title: "10/24 恵比寿のお店めぐり", url: "#" }
    ],
    photos: ["images/p6-a.jpg", "images/p6-b.jpg"]
  },
  {
    id: 7, name: "なな", area: "表参道", age: 25,
    tags: ["ジェルネイル", "ニュアンス", "手描きアート"],
    stars: 4, likes: 63, views: 890,
    updatedMin: 180, updatedLabel: "本日 12:30 更新",
    joinedDays: 10, mood: "🎨", streak: 2,
    shop: "フリーネイリスト（レンタルサロン利用）",
    height: "—", job: "ネイリスト", work: "フリー（レンタルサロン利用）",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "作品日記（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-01", title: "11/1 秋色ニュアンスのサンプル（外部ページ）", url: "#" },
      { date: "2026-10-30", title: "10/30 ハロウィンネイルまとめ", url: "#" },
      { date: "2026-10-27", title: "10/27 持ち込みデザインについて", url: "#" }
    ],
    photos: ["images/p7-a.jpg", "images/p7-b.jpg"]
  },
  {
    id: 8, name: "Mia", area: "渋谷", age: 25,
    tags: ["ファッション", "写真", "コーデ"],
    stars: 5, likes: 196, views: 2980,
    updatedMin: 25, updatedLabel: "本日 18:35 更新",
    joinedDays: 1, mood: "✨", streak: 1,
    shop: "AIモデル見本（所属なし）",
    height: "—", job: "インフルエンサー", work: "フリー",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "日記・投稿（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-10", title: "11/10 撮影の記録（外部ページ）", url: "#" },
      { date: "2026-11-08", title: "11/8 秋コーデのまとめ", url: "#" },
      { date: "2026-11-05", title: "11/5 お気に入りの小物", url: "#" }
    ],
    photos: ["images/p8-a.jpg", "images/p8-b.jpg"]
  },
  {
    id: 9, name: "あおい", area: "新宿", age: 24,
    tags: ["モデル", "写真", "カフェ"],
    stars: 4, likes: 88, views: 1240,
    updatedMin: 95, updatedLabel: "本日 17:25 更新",
    joinedDays: 1, mood: "☀️", streak: 1,
    shop: "AIモデル見本（所属なし）",
    height: "—", job: "インフルエンサー", work: "フリー",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "日記・投稿（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-10", title: "11/10 試着の記録（外部ページ）", url: "#" },
      { date: "2026-11-07", title: "11/7 カフェで読書", url: "#" }
    ],
    photos: ["images/p9-a.jpg", "images/p9-b.jpg"]
  },
  {
    id: 10, name: "sakura", area: "池袋", age: 26,
    tags: ["モデル", "ファッション", "秋コーデ"],
    stars: 5, likes: 142, views: 1870,
    updatedMin: 160, updatedLabel: "本日 16:20 更新",
    joinedDays: 1, mood: "🌸", streak: 1,
    shop: "AIモデル見本（所属なし）",
    height: "—", job: "インフルエンサー", work: "フリー",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "日記・投稿（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-10", title: "11/10 秋の装い（外部ページ）", url: "#" },
      { date: "2026-11-06", title: "11/6 撮影の裏側", url: "#" }
    ],
    photos: ["images/p10-a.jpg", "images/p10-b.jpg"]
  },
  {
    id: 11, name: "モデルC", area: "銀座", age: 25,
    tags: ["写真", "読書", "カフェ"],
    stars: 4, likes: 97, views: 1360,
    updatedMin: 220, updatedLabel: "本日 15:20 更新",
    joinedDays: 1, mood: "📚", streak: 1,
    shop: "AIモデル見本（所属なし）",
    height: "—", job: "インフルエンサー", work: "フリー",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "日記・投稿（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-10", title: "11/10 カフェ読書の記録（外部ページ）", url: "#" },
      { date: "2026-11-04", title: "11/4 街歩きスナップ", url: "#" }
    ],
    photos: ["images/p11-a.jpg", "images/p11-b.jpg"]
  },
  {
    id: 12, name: "MIYU", area: "原宿", age: 23,
    tags: ["ダンス", "動画", "ファッション"],
    stars: 5, likes: 176, views: 2340,
    updatedMin: 55, updatedLabel: "本日 18:05 更新",
    joinedDays: 1, mood: "🎵", streak: 1,
    shop: "AIモデル見本（所属なし）",
    height: "—", job: "インフルエンサー", work: "フリー",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "日記・投稿（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-10", title: "11/10 ダンス動画の記録（外部ページ）", url: "#" },
      { date: "2026-11-08", title: "11/8 新しい振り付け", url: "#" }
    ],
    photos: ["images/p12-a.jpg", "images/p12-b.jpg"]
  },
  {
    id: 13, name: "ララァ", area: "中目黒", age: 22,
    tags: ["写真", "ファッション", "キャラクター"],
    stars: 5, likes: 158, views: 2010,
    updatedMin: 35, updatedLabel: "本日 18:25 更新",
    joinedDays: 1, mood: "🌙", streak: 1,
    shop: "AIモデル見本（所属なし）",
    height: "—", job: "インフルエンサー", work: "フリー",
    links: [
      { type: "home", label: "公式プロフィール（外部）", url: "#" },
      { type: "blog", label: "日記・投稿（外部）", url: "#" },
      { type: "sns", label: "SNS（外部）", url: "#" }
    ],
    diary: [
      { date: "2026-11-10", title: "11/10 撮影の記録（外部ページ）", url: "#" },
      { date: "2026-11-07", title: "11/7 聖域の番人のこと", url: "#" }
    ],
    photos: ["images/p13-a.jpg", "images/p13-b.jpg"]
  }
];

// 掲載者ダッシュボード用モック数値（すべて架空・デモ表示用）
const ANALYTICS = {
  personId: 1,
  range: "直近30日間",
  views: 2480, viewsDelta: "+18%",
  likes: 94,
  favorites: 51,
  clicksTotal: 186, clicksDelta: "+12%",
  clicksByLink: [
    { label: "公式プロフィール（外部）", count: 82 },
    { label: "写メ日記（外部）", count: 71 },
    { label: "SNS（外部）", count: 33 }
  ]
};
