import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Github, Heart, Linkedin } from "lucide-react";

const Footer = () => {
    const { information } = portfolioData();
    const { t } = useLanguage();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-primary">{"</"}</span>
                        <span className="font-semibold text-foreground">
                            {information.name.split(" ").slice(-1)}
                        </span>
                        <span className="font-mono text-primary">{">"}</span>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={information.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href={information.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        {t("footer.builtWith")}{" "}
                        <Heart className="w-4 h-4 text-primary" />{" "}
                        {t("footer.in")} {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
