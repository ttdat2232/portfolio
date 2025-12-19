import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import {
    Container,
    Database,
    GitBranch,
    Languages,
    Layers,
    Layout,
    MessageSquare,
    Puzzle,
    Server,
} from "lucide-react";

const SkillsSection = () => {
    const { skill } = portfolioData();
    const { t } = useLanguage();

    const techCategories = [
        {
            key: "backend",
            label: t("skills.backend"),
            icon: Server,
            items: skill.techStack.backend,
        },
        {
            key: "frontend",
            label: t("skills.frontend"),
            icon: Layout,
            items: skill.techStack.frontend,
        },
        {
            key: "database",
            label: t("skills.database"),
            icon: Database,
            items: skill.techStack.database,
        },
        {
            key: "devops",
            label: t("skills.devops"),
            icon: Container,
            items: skill.techStack.devops,
        },
        {
            key: "messageQueue",
            label: t("skills.messageQueue"),
            icon: MessageSquare,
            items: skill.techStack.messageQueue,
        },
        {
            key: "versionControl",
            label: t("skills.versionControl"),
            icon: GitBranch,
            items: skill.techStack.versionControl,
        },
    ];

    const conceptCategories = [
        {
            key: "designPattern",
            label: t("skills.designPatterns"),
            icon: Puzzle,
            items: skill.Concept.designPattern,
        },
        {
            key: "OOP",
            label: t("skills.principles"),
            icon: Layers,
            items: skill.Concept.OOP,
        },
        {
            key: "Architecture",
            label: t("skills.architecture"),
            icon: Layers,
            items: skill.Concept.Architecture,
        },
    ];

    return (
        <section className="py-24 relative" id="skills">
            <div className="container mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <code className="font-mono text-primary text-sm mb-4 block">
                        {"<Skills />"}
                    </code>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        {t("skills.title")}{" "}
                        <span className="text-gradient">
                            {t("skills.titleHighlight")}
                        </span>
                    </h2>
                </div>

                {/* Tech Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {techCategories.map((category, index) => (
                        <div
                            key={category.key}
                            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-foreground">
                                    {category.label}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-sm font-mono rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Concepts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {conceptCategories.map((category, index) => (
                        <div
                            key={category.key}
                            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <category.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-semibold text-foreground">
                                    {category.label}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1.5 text-sm font-mono rounded-md bg-muted text-muted-foreground hover:text-primary transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Languages */}
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Languages className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-foreground text-lg">
                            {t("skills.languages")}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skill.language.map((lang) => (
                            <div
                                key={lang.Name}
                                className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all"
                            >
                                <p className="font-semibold text-foreground mb-1">
                                    {lang.Name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {lang.Name === "English"
                                        ? t("lang.english")
                                        : t("lang.japanese")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
