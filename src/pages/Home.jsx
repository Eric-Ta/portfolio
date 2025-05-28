import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
//import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
/*import { Timeline } from "../components/Timeline";
import { SchoolTimeline } from "../components/SchoolTimeline";
<Timeline />
            <SchoolTimeline/>*/
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Theme Toggle */}
          <ThemeToggle />
          
    
          {/* Navbar */}
          <Navbar />
          {/* Main Content; ORDERING OF PAGES MATTERS */}
          <main>
            <HeroSection />
            <AboutSection />
            
           
          
    
            <SkillsSection />
            <ContactSection />
            
            
           
            
          </main>
    
          {/* Footer */}
          <Footer />
        </div>
  );
};
