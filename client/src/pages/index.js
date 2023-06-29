import React from 'react';
import orangeBg from './orange-bg.jpg';
import ParticlesBg from "particles-bg";
import "./index.css";
const Home = () => {
return (
	<div>
    <ParticlesBg type="cobweb" bg={true} />
	<h1>Welcome to FLEXIBLE COURSE REGISTRATION SYSTEM</h1>
	<div className="App">
      <header className="App-header">
        <h1>FCRS TIME TABLE</h1>
		<img src={orangeBg}></img>
      </header>
      <div className="App-content">
        <div className="App-description">
          <h2>Optimize your university's course timetable with FCRS</h2>
          <p>
          FLEXIBLE COURSE REGISTRATION SYSTEM (FCRS) is a fully flexible credit system that allows students to choose courses according to the available courses of the faculty. With FCRS, students have the flexibility to design their course schedules according to their individual interests and academic goals.<br></br>

FCRS provides a comprehensive course catalog that includes a wide variety of courses from different faculties, giving students the opportunity to explore different areas of study and develop a well-rounded education. Students can choose their courses based on their personal interests, academic strengths, and career aspirations.<br></br>

The course selection process is simple and streamlined, allowing students to browse available courses, select the ones they want to take, and register for them all in one place. FCRS also provides real-time information on course availability and scheduling conflicts, so students can make informed decisions when designing their schedules.<br></br>
  
FCRS is designed to be student-centered, providing a personalized learning experience that meets the unique needs of each student. With FCRS, students have the freedom to create their own academic paths, explore their interests, and pursue their passions.<br></br>

FCRS also benefits faculty members by providing them with a streamlined scheduling process and reducing conflicts between courses. With FCRS, faculty members can better manage their course loads and devote more time to research and teaching.<br></br>

Overall, FCRS is a comprehensive and flexible system that benefits both students and faculty. It provides students with the freedom to create their own course schedules and explore their interests, while also benefiting faculty members by streamlining the course scheduling process and reducing scheduling conflicts.<br></br>
          </p>
          <h3>Key Features</h3>
          <ul>
            <li>Flexible scheduling options</li>
            <li>Automatic conflict resolution</li>
            <li>Faculty preference tracking</li>
            <li>Real-time schedule updates</li>
          </ul>
          <button className="App-button">Learn More</button>
        </div>
      </div>
    </div>
	</div>
);
};

export default Home;
