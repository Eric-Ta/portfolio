import { Briefcase, Code, User } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="educationsection" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Education Philosophy</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          These help guide my teaching philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Make pages full of expandable cards: with learning philosphy and 1 line summary, + expand to more depth
            </h3>

            <p className="text-muted-foreground">
              Reflecting on my computer science experience and thinking about my future career goals, I decided 
              to shift away from this path to work in a field where I can provide a positive influence into the 
              future. Teaching is the answer to this, giving me the opportunity to teach education curriculum, and more
              importantly, teaching the youth valuable life lessons. 
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating a positive influence on the future of society, which will be accomplished
              during my career as a teacher. I decided to get a computer science degree because of my love of problem solving 
              and technology, both of which I will continue to use in my teaching career (and the rest of my life). 
            </p>

            <p className="text-muted-foreground">
              I was born and raised in Calgary and currently residing here! During my free time away from education and work, I love maintaing an active lifestyle! I love to play tennis, 
              golf, basketball, run, and workout. My favourite sports teams are the Calgary Flames, San Francisco 49ers, and the Los Angeles 
              Clippers. I am also a massive film connoisseur watching just about everything from old classics to the latest and greatest blockbusters! 
            </p>

            <p className="text-muted-foreground">
              Don't hesitate to reach out if you're interested in getting to learn more about me, or even if you find a bug on my website!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Lifelong Learner</h4>
                  <p className="text-muted-foreground">
                    We are always learning! Even though I have a computer science degree, I feel that I have bareley scratched the surface in 
                    this massive domain. Becoming a teacher will put me on the other side of learning as I teach educational and life-long skills to the future 
                    of the world! 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Teamwork</h4>
                  <p className="text-muted-foreground">
                    Throughout school, work, sports, and life in general, I have learned that working in 
                    a team setting is crucial for success. My communication, leadership, accountability, and respect skills
                    have been developed throughout my life, to make working in a team as effective as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Science Background</h4>
                  <p className="text-muted-foreground">
                    Technical knowledge and experience throughout my life and university including software development and data analytics. Working on 
                    large projects individualy and in a team setting, learning from and teaching more experienced members across the company, developing 
                    my professional skills, and making meaningful relationships is just some of experience working in a corporate setting. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
