import React from 'react';

const Education = ({ education }) => {
  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((edu) => (
        <div key={edu.education_id} style={{display:'flex'}}>
          <div>
          <h3>{edu.degree}</h3>
          <p>{edu.school_name}</p>
          <p>{edu.field_of_study}</p>
          </div>
          <div style={{marginLeft:"500px"}}>
          <p>{edu.degree_start_date} - {edu.degree_end_date}</p>
          <p>{edu.school_location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
