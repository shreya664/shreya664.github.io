import {useState} from 'react';
import Card from "../Card";
import './resume.css';


const Resume = () => {

  const [educaton, setEducation] = useState([
    {
      dates: "Batch of 2023",
      title: "B.Tech, E&TC",
      subtitle: "VIT, Pune",
      description: "CGPA: 8.5"
    },
    {
      dates: "Batch of 2019",
      title: "Grade XII",
      subtitle: "St. Mira's College, Pune"
    },
    {
      dates: "Batch of 2017",
      title: "Grade X",
      subtitle: "St. Josephs's Convent HS, Pune",
      description: "Percentage: 92%"
    },
  ]);


  const [experience, setExperience] = useState([
      {
        dates: "June 2020 - July 2021",
        title: "Team Head",
        subtitle: "SWD, VIT Pune",
        description: "My work included unearthing new project implementable ideas, leading and managing the team, organizing workshops and delivering seminars in the same."
      },
      {
        dates: "October 2021 - November 2021",
        title: "UX Designer",
        subtitle: "Internship Studios",
        description: "A startup for managing and booking trips in India. Worked on figma, designed the wireframes and the final prototype of the react app."
      },
      {
        dates: "March 2020 - March 2021",
        title: "Teaching Assistant",
        subtitle: "VIT, Pune",
        description: "Assisted batches of junior students and taught various core computer science concepts. Mentored over 1000 students online"
      },
    ]);
  
    
  
    const [achievements, setAchievements] = useState([
      {
        dates: "2021",
        title: "Publication",
        subtitle: "IJSER Research Publication. Vol. 12, Issue 11, Nov, 2021.",
        description: "Wrote technical content and documentation for the R3ND3R app which transcended into a publication"
      },
      {
        dates: "April 2020 - Sept 2021",
        title: "Certification of Excellence",
        subtitle:"SWD",
        description: "Mentored over 1000 juniors and moderated a team of coleads and colleagues."
      },
      {
        dates: "July 2021",
        title: "Certificate of Internship",
        subtitle: "IStudios",
        description: "."
      },
      
    ]);



    return (
      <div className="col-grid">
        
        <div className="col">
          <h1>Education</h1>
          <Card cardInfo={educaton}/>
        </div>
        
        <div className="col">
          <h1>Experience</h1>
          <Card cardInfo={experience}/>
        </div>

        <div className="col">
          <h1>Achievements</h1>
          <Card cardInfo={achievements}/>
        </div>

        <div className="col">
          <h1>Community Work</h1>
          <Card cardInfo={community}/>
        </div>
        
      </div>

    )
}

export default Resume