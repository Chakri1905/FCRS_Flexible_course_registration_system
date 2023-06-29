import React, { useState } from 'react';
import './facultycourses.css';
import ParticlesBg from 'particles-bg';
import Axios from 'axios';

const Facultycourses = () => {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [slot, setSlot] = useState('');
  const [code, setCode] = useState('');
  const [courseList, setCourseList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addCourse = () => {
    Axios.post('http://localhost:3001/createCourse', {
      course_name: courseName,
      course_code: courseCode,
      faculty_name: facultyName,
      slot: slot,
      code: code,
    })
      .then(() => {
        setCourseList([
          ...courseList,
          {
            course_name: courseName,
            course_code: courseCode,
            faculty_name: facultyName,
            slot: slot,
            code: code,
          },
        ]);
      })
      .catch((error) => {
        console.error('Error adding course:', error);
      });
  };

  const getCourses = () => {
    Axios.get('http://localhost:3001/courses').then((response) => {
      setCourseList(response.data);
    });
  };

  return (
    <div className='body'>
      <div>
        <ParticlesBg type='ball' bg={true} />
        <form onSubmit={handleSubmit} className='faculty-credits'>
          <label>
            Course Name:
            <input
              type='text'
              name='course_name'
              className='input-field'
              onChange={(e) => setCourseName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Course Code:
            <input
              type='text'
              name='course_code'
              className='input-field'
              onChange={(e) => setCourseCode(e.target.value)}
            />
          </label>
          <br />
          <label>
            Faculty Name:
            <input
              type='text'
              name='faculty_name'
              className='input-field'
              onChange={(e) => setFacultyName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Slot:
            <input
              type='text'
              name='slot'
              className='input-field'
              onChange={(e) => setSlot(e.target.value)}
            />
          </label>
          <br />
          <label>
            Code:
            <input
              type='text'
              name='code'
              className='input-field'
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          <br />
          <button
            type='submit'
            onClick={addCourse}
            className='submit-button'
          >
            Add Course
          </button>
        </form>
      </div>
      <div className='Faculty'>
        <button onClick={getCourses}>Show Courses</button>
        {courseList.map((course, key) => (
          <div key={key}>
            <table className='faculty-table'>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Course Code</th>
                  <th>Faculty Name</th>
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

export default Facultycourses;
