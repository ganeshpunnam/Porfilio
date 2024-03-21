import React, { useState } from 'react';
import './index.css';

const Index = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div className="home-container">
      <h1>Sai Ganesh Punnam</h1>
      <p>Full Stack Developer</p>
      <p className="skills">
        Java, Spring, Spring Boot, Bootstrap, HTML, React, CSS, SQL, Python.
      </p>
      <button className="resume-button" type="button" onClick={toggleResume}>
        {showResume ? 'Hide Resume' : 'View Resume'}
      </button>
      {showResume && (
        <embed src=''/>
      )}
    </div>
  );
};

export default Index;
