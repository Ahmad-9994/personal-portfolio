import React from 'react'
import "./skill.css"
import "../../../node_modules/aos/dist/aos.css"

const Skills = () => {
  const skillsData = [
    { name: 'HTML', proficiency: 100 },
    { name: 'CSS', proficiency: 75 },
    { name: 'BootStrap', proficiency: 78 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React JS', proficiency: 75 },
    { name: 'Node JS', proficiency: 60 },
    { name: 'Express JS', proficiency: 60 },
    { name: 'Mongo Db', proficiency: 70 },
  ];

  return (
   <div className='skill-wrapper' data-aos="zoom-in-down" id='skill'>
   <span>My </span>
   <span>Skills</span>

    <div className='skills-main'>
    
    <div className='tecnical-part'> 
    <h3>Technical Skill</h3>
    <div className='skills-list'>
        {skillsData.map((e) => (
          <div className='skill'>

          <div style={{display:"flex" ,justifyContent:"space-between"}}><span className='skill-name'>{e.name} </span>
          <span className='skill-name'> {e.proficiency}%</span>
          </div>
          
          <div className='skill-bar'>
            <div className='skill-fill' style={{ width: `${e.proficiency}%` }}></div>
          </div>
        </div>
        ))}
      </div>
    
    </div>


    <div className='professional-part'> 
    <h3>Professional Skill</h3>
  
          <ProfessionalSkill />
    </div>
    </div>
    </div>
  )
}

function ProfessionalSkill() {
  const professionalSkill = [
    { name: 'problem solving', proficiency: 80 },
    { name: 'Communication', proficiency: 75 },
    { name: 'problem solving', proficiency: 78 },
    { name: 'problem solving', proficiency: 70 },
  ];

  return (
    <div className='professionalSkill-container'>
      {professionalSkill.map((skill) => (
        <div className='single-circle' key={skill.name}>
          <div className='p-skill' style={{ background:`conic-gradient(var(--orange) ${skill.proficiency *4}deg, white 0deg)`}}>
            <div className='p-skill-inner'>{skill.proficiency}%</div>
          </div>
          <h5>{skill.name}</h5>
        </div>
      ))}
    </div>
  );
}


export default Skills;


