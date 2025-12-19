import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
    const { information } = portfolioData();
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
                style={{ animationDelay: "-3s" }}
            />

            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="animate-fade-up">
                    {/* Avatar */}
                    <div className="mb-8 flex justify-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/50 p-1">
                            <img
                                src="https://mondialbrand.com/wp-content/uploads/2024/03/anh-anime-0258.jpg"
                                alt={information.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Terminal-style greeting */}
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <code className="font-mono text-sm text-muted-foreground">
                            {t("hero.greeting").split("$")[0]}
                            <span className="text-primary">$</span>
                            {t("hero.greeting").split("$")[1]}
                        </code>
                    </div> */}

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        <span className="text-foreground">
                            {information.name.split(" ").slice(0, -1).join(" ")}{" "}
                        </span>
                        <span className="text-gradient">
                            {information.name.split(" ").slice(-1)}
                        </span>
                    </h1>

                    {/* Role */}
                    <p className="text-2xl md:text-3xl font-mono text-primary mb-6">
                        {t("hero.role")}
                    </p>

                    {/* Summary */}
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                        {information.professionalSummary}
                    </p>

                    {/* Contact info */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm">
                                {information.address}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="text-sm">
                                {information.phoneNumber}
                            </span>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href={information.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow transition-all duration-300"
                        >
                            <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                            <span className="font-medium">GitHub</span>
                        </a>
                        <a
                            href={information.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:glow-strong transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
