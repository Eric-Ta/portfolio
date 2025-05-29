import { Briefcase, Code, User } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavbarEducation } from "../components/NavbarEducation";

import { EducationSection } from "../components/EducationSection";
export const EducationPage = () => {
  return (
    
    <section id="educationpage" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
       <ThemeToggle />
        
      {" "}
      <main>
        <NavbarEducation />
        <EducationSection />
      
      </main>
    </section>
  );
};