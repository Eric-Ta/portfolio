import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 90, category: "technical" },
  { name: "CSS", level: 90, category: "technical" },
  { name: "JavaScript", level: 90, category: "technical" },
  { name: "TypeScript", level: 90, category: "technical" },
  { name: "React", level: 85, category: "technical" },
  { name: "C", level: 80, category: "technical" },
  { name: "C++", level: 80, category: "technical" },
  { name: "C#", level: 80, category: "technical" },

  // Backend
  { name: "Node.js", level: 80, category: "technical" },
  { name: "Express", level: 75, category: "technical" },
  { name: "MongoDB", level: 70, category: "technical" },
  { name: "Python", level: 65, category: "technical" },
  { name: "Java", level: 60, category: "technical" },
  { name: "SQL", level: 60, category: "technical" },


  // Tools
  { name: "Git/GitHub", level: 90, category: "technical" },
  { name: "Power BI", level: 70, category: "technical" },
  { name: "Figma", level: 85, category: "technical" },
  { name: "VS Code", level: 95, category: "technical" },
  { name: "Amazon Web Services", level: 95, category: "technical" },
  { name: "Microsoft Azure", level: 95, category: "technical" },
  { name: "Postman", level: 95, category: "technical" },

  { name: "Communication", level: 60, category: "essential" },
  { name: "Adaptability", level: 60, category: "essential" },
  { name: "Teamwork", level: 60, category: "essential" },
  { name: "Accountability", level: 60, category: "essential" },
  { name: "Learning Mindset", level: 60, category: "essential" },
  { name: "Organization", level: 60, category: "essential" },
  { name: "Problem Solver", level: 60, category: "essential" },
];

const categories = ["essential", "technical", "all"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("essential");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};