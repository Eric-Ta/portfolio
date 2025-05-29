
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import { IoSchool } from "react-icons/io5";


export const SchoolTimeline = () => {
  return (

    
    
   <section id="schooltimeline" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Education </span>
        </h2>
      
  <VerticalTimeline >

  
  <VerticalTimelineElement
  
    className="vertical-timeline-element--work"
    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2025 - 2027"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<IoSchool />}
    contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box background
    contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
    
  >
    <h3 className="vertical-timeline-element-title">Bachelors of Education</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Calgary</h4>
    <p>
      Specializing in Elementary Math
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<WorkIcon />}
    contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box
    contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
    
  >
    <h3 className="vertical-timeline-element-title">Bachelors of Science</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Calgary</h4>
    <p>
      Bachelors of Science in Computer Science with Co-Op Designition
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2018 - 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   // icon={<WorkIcon />}
    contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box
    contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
  >
    <h3 className="vertical-timeline-element-title">Bachelors of Science Transfer Program</h3>
    <h4 className="vertical-timeline-element-subtitle">Mount Royal University</h4>
    <p>
      Bachelors of Science in Computer Science transfer program
    </p>
  </VerticalTimelineElement>
  
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  //  icon={<StarIcon />}
  />
</VerticalTimeline>



 </div>
</section>
  );
};