import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SkillsSection from "@/components/SkillsSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
    return (
        <LanguageProvider>
            <main className="min-h-screen bg-background">
                <LanguageSwitcher />
                <HeroSection />
                <SkillsSection />
                {/* <ProjectsSection /> */}
                <ExperienceSection />
                <EducationSection />
                <Footer />
            </main>
        </LanguageProvider>
    );
};

export default Index;
