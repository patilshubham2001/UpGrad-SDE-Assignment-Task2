
import React from 'react'

const Skills = ({skills}) => {
  return (
    <div className='skills'>
      
      {
        
        skills.map((skill)=>{
            return <div key={skill.id}>
              <div><h3>KeySkills</h3></div>
                <p>{skill.top_technical_skills}</p>
                <p>{skill.technical_skills}</p>
                <p>{skill.non_technical_skills}</p>
                <p>{skill.softwares}</p>
                <div style={{
                   width : '500%',
                   height: "5px",
                   backgroundColor: "#eb5f0f",
                   marginTop: "20px"
                }}></div>
            </div>
        })
      }
    </div>
  )
}

export default Skills;

