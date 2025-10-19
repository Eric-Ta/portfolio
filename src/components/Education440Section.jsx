import { Briefcase, Code, User } from "lucide-react";
import rowphoto from "../images/row.jpeg";
import campsphoto from "../images/camps.jpeg";
import sunrisephoto from "../images/sunrise.jpeg";
import jacketphoto from "../images/jacket.jpeg";

export const Education440Section = () => {
  return (
    <section id="education440section" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary"> EDUC 440 Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Who Am I?
            </h2>

            <p className="text-muted-foreground">
              Throughout my experience as a learner in school, student in university, and an instructor for a STEM summer camp, 
              I know how important a good teacher is for students in the classroom to succeed and to learn effectively. 
              In order to create an effective classroom environment, a teacher needs to be knowledgeable and care about the material they are teaching, 
              and also have genuine care and interests for their students and the school culture as a whole. 
              A teacher should be enthusiastic and excited for the material that they will be teaching, 
              as this excitement can carry over to the students they are teaching. 
              A teacher passionate about the material will also lead to innovative and fun ways of teaching, 
              which can make lessons memorable for their students, fully learning the content instead of sheer memorization. 
              Being passionate about the material is just one part of being a good teacher, but knowing their students can be even more important. 
              Understanding the various need each individual has will allow teachers to cater lessons to address these needs to make learning as 
              equitable as possible for all students in the classroom such as providing additional modes of learning and additional help when needed. 
              Connecting with students outside the classroom and taking an interest in their interests (such as favourite sports, movies, video games, etc) 
              will make students respect you more as they don’t just see you as their teacher, but a person who can be similar to them. 

            </p>

            <p className="text-muted-foreground">
              Nowadays, classrooms can be very complicated; with big class sizes, and students who have various individual needs. 
              Throughout my time in Werklund, I will be exposed to a lot of teaching theory, classroom experience from professors and classmates, 
              discussions with professors and classmates, and workshops with teaching professionals from across the city, all of which shape my way in thinking, 
              resulting in creating the best possible classroom experience I can provide to my students and advice to help tackle these complex classrooms. 
              My practicum experience throughout will give me an amazing opportunities to put this theory to use in an actual classroom 
              and to be able to get feedback from a mentor teacher going over what well went and what I can improve on in the future. 
              This practicum experience will put me both in the teacher and learner role. I will be a teacher during lessons and help for my students. 
              I will be a learner as I receive feedback from my mentor teacher, and as I self-reflect on my own teacher role.
            </p>

            <p className="text-muted-foreground">
              About me! I am currently a first year education after-degree student attending the Werklund School of Education at the University Of Calgary. 
              I am also involved with athletics at the school, being apart of the Dino’s Rowing team. Rowing has been an amazing experience so far; 
              learning how to row on the water, attending very early morning practices (with beautiful sunrises), and attending my first regatta! 
              I also currently work at lululemon, a Canadian athleisure clothing brand, providing exceptional and personalized shopping experience to guests 
              and making meaningful connections with like-minded co-workers. 
              I have a degree in computer science from the University of Calgary, and was able to intern for companies such as ENMAX. 
              During my very limited free time, I love watching sports (Calgary Flames, San Francisco 49ers, and Los Angeles Clippers), 
              playing golf, tennis, watching movies, and going on runs!

            </p>

            <p className="text-muted-foreground">
              The buttons below will open a new tab to different components of EDUC 440, including my HEARTcare module, lesson plans, 
              and some of the random notes I took throughout this 2 week online practicum!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="https://drive.google.com/file/d/11-mzPG6uzCuFZdSp_QcccmQwTLNWrRRn/view?usp=share_link" target="_blank" className="cosmic-button">
                {" "}
                HEARTcare Module
              </a>

              <a
                href="https://drive.google.com/file/d/1X3u10j5GqAfX9TGh_NejVmaDIm_aW4Mi/view?usp=share_link" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                EDUC 440 Notes
              </a>

              
            </div>

             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="https://drive.google.com/file/d/18LhYF8wiGO4pgzzz09W4G1qUtcwz39p5/view?usp=share_link" target="_blank" className="cosmic-button">
                {" "}
                Lesson Plan 1
              </a>

              <a
                href="https://drive.google.com/file/d/1uc_eWidQC4MkY_28_qGMg00leG6QW6VX/view?usp=share_link" target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Lesson Plan 2
              </a>

              
            </div>
          </div>
            
          <div className="grid grid-cols-1 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                 My Teaching Philosophy
                </h2>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Lifelong Learner</h4>
                  <p className="text-muted-foreground">
                    We are always learning! 
                    Becoming a teacher will put me on the other side of learning as I teach to the future! 
                    I feel it is important to introduce to students the concept that learning never stops. 
                    Learning doesn’t end when the bell rings at the end of the day and that anything in life can be a learning lesson. 
                    This concept took longer than I wanted to grasp with me and I want to make sure all my students are aware of this at a young age!
 
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
                  <h4 className="font-semibold text-lg">Teamwork and Collaboration</h4>
                  <p className="text-muted-foreground">
                    Throughout school, work, sports, and life in general, I have learned that working in a team setting is crucial for success. 
                    Having strong communication, leadership, accountability, respect, and other collaboration and teamwork skills is crucial for success. 
                    You can be a very knowledgable person, but without the proper teamwork skills, it can handicap your potential in the future. 
                    I want to have as many collaboration activities as possible when I am a teacher, 
                    so these teamwork skills can develop and hopefully lay a solid foundation for the future.
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
                  <h4 className="font-semibold text-lg">Practicality and Application</h4>
                  <p className="text-muted-foreground">
                    Throughout my time in school, many of the lessons that stood out to me involved practical application. 
                    Activities such as field trips (outdoor learning, zoo, science centre), French cafe, evaluating political parties (at grade 6! Woah!), 
                    and what we would spend $10 million dollars on in 24 hours. 
                    These activities are all related to concepts we learned in class, but applied to the real world, which provided more interest for many, 
                    knowing what we can directly apply our learning on. 
                    I want to try to connect every lesson with how the concept may be used in the real world, so students have a deeper connection with the lesson, and not feel like they are wasting time learning curriculum. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        <img src={rowphoto} alt="row" />
        <img src={campsphoto} alt="camps" />
        <img src={sunrisephoto} alt="sunrise" />
        <img src={jacketphoto} alt="jacket" />
        </div>
      </div>
    </section>
  );
};
