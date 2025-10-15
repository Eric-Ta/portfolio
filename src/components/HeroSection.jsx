import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hello! I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Eric
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Tan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a Bachelors of Education student from the University of Calgary specializing in Elementary Education set to graduate in April 2027. 
            I have a previous degree in Computer science, where I have interned for companies including ENMAX and Alberta Health Services.
          </p>

           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="educ440" className="cosmic-button">
              View My Education 440 Portfolio !!
            </a>
          </div>
         {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="edu" className="cosmic-button">
              View My Education Portfolio
            </a>
          </div> */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#timeline" className="cosmic-button">
              View My Experience
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
