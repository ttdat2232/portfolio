import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from "react";

export type Language = "en" | "vi" | "ja";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Hero
        "hero.greeting": "~/developer$ hello_world",
        "hero.role": ".NET Developer",

        // Skills
        "skills.title": "Technical",
        "skills.titleHighlight": "Expertise",
        "skills.backend": "Backend",
        "skills.frontend": "Frontend",
        "skills.database": "Database",
        "skills.devops": "DevOps",
        "skills.messageQueue": "Message Queue",
        "skills.versionControl": "Version Control",
        "skills.designPatterns": "Design Patterns",
        "skills.principles": "Principles",
        "skills.architecture": "Architecture",
        "skills.languages": "Languages",

        // Experience
        "experience.title": "Work",
        "experience.titleHighlight": "History",

        // Education
        "education.title": "Academic",
        "education.titleHighlight": "Background",

        // Footer
        "footer.builtWith": "Built with",
        "footer.in": "in",

        // Resume
        "resume.export": "Export Resume",

        // Language names
        "lang.english": "Able to write and speak in a business environment",
        "lang.japanese": "Learning N3",
    },
    vi: {
        // Hero
        "hero.greeting": "~/developer$ xin_chào",
        "hero.role": "Lập trình viên .NET",

        // Skills
        "skills.title": "Kỹ năng",
        "skills.titleHighlight": "Chuyên môn",
        "skills.backend": "Backend",
        "skills.frontend": "Giao diện",
        "skills.database": "Cơ sở dữ liệu",
        "skills.devops": "DevOps",
        "skills.messageQueue": "Hàng đợi tin nhắn",
        "skills.versionControl": "Quản lý phiên bản",
        "skills.designPatterns": "Design Patterns",
        "skills.principles": "Nguyên tắc",
        "skills.architecture": "Kiến trúc",
        "skills.languages": "Ngôn ngữ",

        // Experience
        "experience.title": "Kinh nghiệm",
        "experience.titleHighlight": "Làm việc",

        // Education
        "education.title": "Học",
        "education.titleHighlight": "Vấn",

        // Footer
        "footer.builtWith": "Được xây dựng với",
        "footer.in": "năm",

        // Resume
        "resume.export": "Xuất CV",

        // Language names
        "lang.english": "Có thể viết và nói trong môi trường kinh doanh",
        "lang.japanese": "Đang học N3",
    },
    ja: {
        // Hero
        "hero.greeting": "~/developer$ こんにちは",
        "hero.role": ".NET 開発者",

        // Skills
        "skills.title": "技術",
        "skills.titleHighlight": "専門知識",
        "skills.backend": "バックエンド",
        "skills.frontend": "フロントエンド",
        "skills.database": "データベース",
        "skills.devops": "DevOps",
        "skills.messageQueue": "メッセージキュー",
        "skills.versionControl": "バージョン管理",
        "skills.designPatterns": "デザインパターン",
        "skills.principles": "原則",
        "skills.architecture": "アーキテクチャ",
        "skills.languages": "言語",

        // Experience
        "experience.title": "職歴",
        "experience.titleHighlight": "経験",

        // Education
        "education.title": "学歴",
        "education.titleHighlight": "背景",

        // Footer
        "footer.builtWith": "愛情を込めて作成",
        "footer.in": "年",

        // Resume
        "resume.export": "履歴書をダウンロード",

        // Language names
        "lang.english": "ビジネス環境で書き、話すことができます",
        "lang.japanese": "N3学習中",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");

    const t = useCallback(
        (key: string): string => {
            return translations[language][key] || key;
        },
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
