export const languages = {
    en: 'English',
    ja: '日本語',
};

export const defaultLang = 'ja';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.research': 'Research',
        'nav.symptoms': 'Symptoms',
        'button.learnMore': 'Learn More',
        'card.research.title': 'Research & Studies',
        'card.research.desc': 'Explore scientific evidence and clinical studies on Kampo medicine',
        'card.symptoms.title': 'Symptoms & Treatments',
        'card.symptoms.desc': 'Find effective Kampo remedies for common health concerns',
        'hero.title': 'Traditional Herbal Medicine for Modern Health',
        'hero.subtitle': 'Evidence-based information about Kampo medicine, research insights, and effective treatments for various symptoms',
        'hero.button.research': 'Research',
        'hero.button.symptoms': 'Symptoms',
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.research': '論文解説',
        'nav.symptoms': '悩み・症状',
        'button.learnMore': '詳しく見る',
        'card.research.title': '研究と論文解説',
        'card.research.desc': '漢方医学の科学的根拠と臨床研究について',
        'card.symptoms.title': '悩み・症状別の漢方',
        'card.symptoms.desc': '健康の悩みに合わせた効果的な漢方薬とその解説',
        'hero.title': '現代の健康のための伝統的漢方医学',
        'hero.subtitle': '漢方薬に関するエビデンスに基づく情報、研究の見識、様々な症状に効果的な方剤の解説',
        'hero.button.research': '論文を読む',
        'hero.button.symptoms': '症状から探す',
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
