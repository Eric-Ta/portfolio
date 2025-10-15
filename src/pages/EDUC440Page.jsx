import { Briefcase, Code, User } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar440 } from "../components/Navbar440";

import { Education440Section } from "../components/Education440Section";
export const EDUC440Page = () => {
  return (
    
    <section id="educ440page" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
       <ThemeToggle />
        
      {" "}
      <main>
        <Navbar440 />
        <Education440Section />
      
      </main>
    </section>
  );
};