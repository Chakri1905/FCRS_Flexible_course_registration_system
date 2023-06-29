import React, { useState } from 'react';
import './facultytable.css';
import ParticlesBg from 'particles-bg';
import Axios  from 'axios';
const FacultyTable = () => {
    const [courselist, setcourselist] = useState([]);
    const [courseCode, setCourseCode] = useState('');
  
    const getcourses = () => {
      Axios.get(`http://localhost:3001/registercourses/${courseCode}`)
        .then((response) => {
          setcourselist(response.data);
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
        });
    };
  
    const handleInputChange = (event) => {
      setCourseCode(event.target.value);
    };
  
    return (
      <div>
        <h1>Register</h1>
        <ParticlesBg type="balls" bg={true} />
        <div className="courses">
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter code"
              value={courseCode}
              onChange={handleInputChange}
            />
            <button onClick={getcourses}>Register</button>
          </div>
  
          <button onClick={getcourses}>Registered courses</button>
  
          {courselist.map((course, key) => (
            <div key={key}>
              <table className="courses-table">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Course Code</th>
                    <th>Faculty</th>
                    <th>Slot</th>
                    <th>Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{course.course_name}</td>
                    <td>{course.course_code}</td>
                    <td>{course.faculty_name}</td>
                    <td>{course.slot}</td>
                    <td>{course.code}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    );
};
export default FacultyTable;
