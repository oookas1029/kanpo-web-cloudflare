export const languages = {
    en: 'English',
    ja: '日本語',
};

export const defaultLang = 'ja';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.research': 'Research Evidence',
        'nav.symptoms': 'Chronic Symptoms',
        'button.learnMore': 'Read More',
        'card.research.title': 'Scientific Evidence & Research',
        'card.research.desc': 'Explore clinical studies on Kampo, focusing on molecular nutrition and microbiome',
        'card.symptoms.title': 'Find by Chronic Symptoms',
        'card.symptoms.desc': 'Discover Kampo approaches for complex and unknown chronic issues',
        'hero.title': 'Next-Gen Kampo Unlocked by Microbiome & Molecular Nutrition',
        'hero.subtitle': 'Rebuilding health from the cellular level. Discover evidence-based Kampo medicine tackling the root causes of chronic fatigue and undiagnosed illnesses.',
        'hero.button.research': 'Research Evidence',
        'hero.button.symptoms': 'Search by Symptoms',
        'category.label': 'Categories',
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.research': '最新研究・エビデンス',
        'nav.symptoms': '慢性症状・不調から探す',
        'button.learnMore': '詳しく見る',
        'card.research.title': '科学的根拠（エビデンス）と最新研究',
        'card.research.desc': '腸内フローラや分子生物学の観点から漢方のメカニズムと最新論文を解説',
        'card.symptoms.title': '原因不明の不調・慢性症状から探す',
        'card.symptoms.desc': '副腎疲労、リーキーガットなど、長引く自律神経や細胞のトラブルに効く漢方',
        'hero.title': '腸内フローラと分子生物学から解き明かす、次世代の漢方',
        'hero.subtitle': '最新の生物学と伝統医学を融合。腸内環境の改善や細胞レベル（ミトコンドリア・栄養）の働きから、あなたの不調を根本から解決するエビデンスベースの解説。',
        'hero.button.research': '科学的根拠（エビデンス）',
        'hero.button.symptoms': '慢性症状から探す',
        'category.label': '関連カテゴリ',
    },
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
