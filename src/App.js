//Task 2

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExpreriance';
import Personal from './components/Personal';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

import './styles.css';


function App() {
  const [resumeData, setResumeData] = useState([]);


  const getData = () => {
    fetch('data.json', {                     // data.json file store in public folder
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResumeData(data);
      }).catch((err) => {
        console.log("Error while loading");
      })
  }

  useEffect(() => {

    getData();
  }, []);

  if (!resumeData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      {

        resumeData.map((data) => {
          return <div className='resume-containe'>
            <div className='left-section'>
            <Header
            name={data.first_name + ' ' + data.last_name}
            profession={data.profession}
          />
            <Personal
              email={data.email}
              phone={data.phone_number}
              city={data.city}
              linkedin={data.linkedin} />
            <Skills skills={data.skills} />
            <Certificates certificates={data.certificates}/>
            </div>
            <div className='right-section'>
              <WorkExperience workExperience={data.work_experience} />
              <Education education={data.education} />
            </div>

          </div>
        })
      }
    </div>
  );
}

export default App;
