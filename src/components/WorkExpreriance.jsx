import React from 'react';

const WorkExperience = ({ workExperience }) => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {workExperience.map((work) => (
        <div key={work.work_id} style={{ display: 'flex'}}>
          <div>
            <h3>{work.job_title}</h3>
            <p>{work.company_name}</p>
            <p>{work.description}</p>
          </div>
          <div style={{ marginLeft:"500px" }}><p>{work.start_date} - {work.end_date}</p>
          <p>{work.company_location}</p>
          </div>
        </div>
      ))}
      <div style={{
         width : '100%',
         height: "5px",
         backgroundColor: "#eb5f0f",
         marginTop: "20px"
      }}></div>
    </div>
  );
};

export default WorkExperience;
