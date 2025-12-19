import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
    const { experience } = portfolioData();
    const { t } = useLanguage();

    return (
        <section className="py-24 relative" id="experience">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <code className="font-mono text-primary text-sm mb-4 block">
                        {"<Experience />"}
                    </code>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        {t("experience.title")}{" "}
                        <span className="text-gradient">
                            {t("experience.titleHighlight")}
                        </span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    {experience.map((exp, index) => (
                        <div
                            key={exp.company.name}
                            className="relative pl-8 pb-12 last:pb-0"
                        >
                            {/* Timeline line */}
                            {index !== experience.length - 1 && (
                                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
                            )}

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>

                            {/* Content card */}
                            <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow ml-4">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {exp.company.name}
                                        </h3>
                                        <p className="text-primary font-mono text-lg">
                                            {exp.role}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>{exp.company.FromTo}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span>
                                                {exp.company.Place.join(", ")}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {exp.project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
