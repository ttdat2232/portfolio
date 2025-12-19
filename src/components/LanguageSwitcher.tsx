import { Language, useLanguage } from "@/contexts/LanguageContext";
import ResumeExport from "./ResumeExport";

const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "vi", label: "VI", flag: "🇻🇳" },
    { code: "ja", label: "JA", flag: "🇯🇵" },
];

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
            <ResumeExport />
            <div className="flex items-center gap-1 p-1 rounded-full bg-card/80 backdrop-blur-md border border-border">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            language === lang.code
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                    >
                        <span>{lang.flag}</span>
                        <span className="hidden sm:inline">{lang.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
