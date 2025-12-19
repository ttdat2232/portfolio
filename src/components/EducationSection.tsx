import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Calendar, GraduationCap } from "lucide-react";

const EducationSection = () => {
    const { education } = portfolioData();
    const { t } = useLanguage();

    return (
        <section className="py-24 relative" id="education">
            <div className="container mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <code className="font-mono text-primary text-sm mb-4 block">
                        {"<Education />"}
                    </code>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        {t("education.title")}{" "}
                        <span className="text-gradient">
                            {t("education.titleHighlight")}
                        </span>
                    </h2>
                </div>

                {/* Education card */}
                <div className="max-w-2xl mx-auto">
                    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="w-10 h-10 text-primary" />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {education.Name}
                        </h3>

                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="font-mono">
                                {education.Graduated}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
