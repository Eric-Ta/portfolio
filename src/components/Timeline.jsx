
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import { IoSchool } from "react-icons/io5";


export const Timeline = () => {
  return (

    
    
   <section id="timeline" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Experience </span>
        </h2>
      
  <VerticalTimeline  >

  
  <VerticalTimelineElement
  
    className="vertical-timeline-element--work card-hover "
    //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June 2025 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<IoSchool />}

    contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box background
  contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
  
    
  >
    <h3 className="vertical-timeline-element-title ">Educator</h3>
    <h4 className="vertical-timeline-element-subtitle">Lululemon</h4>
    <p>
      Providing excellent customer experience for a Canadian athleisure clothing brand!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work card-hover"
    date="June 2025 - August 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<WorkIcon />}
      contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box
  contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
  >
    <h3 className="vertical-timeline-element-title">Summer Camp Leader</h3>
    <h4 className="vertical-timeline-element-subtitle">Mount Royal University</h4>
    <p>
      Creating a fun and educational experience for children during summer!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work card-hover"
    date="January 2023 - August 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   // icon={<WorkIcon />}
     contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box
  contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
  >
    <h3 className="vertical-timeline-element-title">Data and Analytics Co-op Student</h3>
    <h4 className="vertical-timeline-element-subtitle">ENMAX</h4>
    <p>
      Working with all things data and programming with an amazing utility company!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work card-hover"
    date="September 2022 - December 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    //icon={<WorkIcon />}
      contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box
  contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
  >
    <h3 className="vertical-timeline-element-title">Software/Web Developer Co-op Student</h3>
    <h4 className="vertical-timeline-element-subtitle">Alberta Health Services</h4>
    <p>
      Solving problems involving front-end and back-end development!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work card-hover"
    date="July 2016 - March 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   // icon={<SchoolIcon />}
     contentStyle={{ background: 'var(--timeline-item-background)', color: 'var(--timeline-item-color)' }} //for box
  contentArrowStyle={{ borderRight: '7px solid var(--timeline-item-background)' }} //for box
  >
    <h3 className="vertical-timeline-element-title">Crew Member</h3>
    <h4 className="vertical-timeline-element-subtitle">McDonalds</h4>
    <p>
      Providing efficient and friendly customer service!
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