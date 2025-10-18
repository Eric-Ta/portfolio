import { Briefcase, Code, User } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavbarEducation } from "../components/NavbarEducation";

import { Education440Section } from "../components/Education440Section";
export const EDUC440Page = () => {
  return (
    
    <section id="educ440page" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
       <ThemeToggle />
        
      {" "}
      <main>
        <NavbarEducation/>
        <Education440Section />
      
      </main>
    </section>
  );
};