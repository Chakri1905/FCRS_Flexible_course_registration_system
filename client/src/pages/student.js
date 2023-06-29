import React from 'react';
import { useState } from 'react';
import Axios from "axios";
import './student.css';
import ParticlesBg from "particles-bg";
const  Student= () => {
	const [name, setName] = useState('');
    const [reg, setReg] = useState('');
    const [branch, setBranch] = useState('');
    const [school, setSchool] = useState('');
    const [credits, setCredits] = useState(0);
    const [newcredits, setNewCredits] = useState('');
    const [studentlist, setStudentlist] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    const addStudent =()=>{
      Axios.post("http://localhost:3001/create", {
        name:name,
        reg:reg,
        branch:branch,
        school:school,
        credits:credits,
        newcredits:credits,
      }).then(()=>{
        setStudentlist([
          ...studentlist,
          {
            name:name,
            reg:reg,
            branch:branch,
            school:school,
            credits:credits,
            newcredits:credits,
          },
        ]);
      });
    };
    const getStudents = () => {
      Axios.get("http://localhost:3001/students").then((response) => {
        setStudentlist(response.data);
      });
    };
    // useEffect(getStudents,[]);
	
	const updateStudentCredits = (id) => {
		Axios.put("http://localhost:3001/update", { credits:newcredits, id: id }).then(
		  (response) => {
			setStudentlist(
			  studentlist.map((val) => {
				return val.id === id
				  ? {
					  id: val.id,
					  name:name,
						reg:reg,
						branch:branch,
						school:school,
					  credits:newcredits,
					}
				  : val;
			  })
			);
		  }
		);
	  };
	//   useEffect(updateStudentCredits,[]);
	  const deleteStudent = (id) => {
		Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
		  setStudentlist(
			studentlist.filter((val) => {
			  return val.id !== id;
			})
		  );
		});
	  };
	//   useEffect(deleteStudent,[]);
return (
	<div>
    <ParticlesBg type="cobweb" bg={true} />
	<h1>Student Registration</h1>
	<div>
      <form onSubmit={handleSubmit} className="credit-form">
      <label>
        Name:
        <input type="text"  onChange={(e) => setName(e.target.value)} className="input-field" />
      </label><br></br>
      <label>
        Registration Number:
        <input type="text"  onChange={(e) => setReg(e.target.value)} className="input-field" />
      </label><br></br>
      <label>
        Branch:
        <input type="text"  onChange={(e) => setBranch(e.target.value)} className="input-field" />
      </label><br></br>
      <label>
        School:
        <input type="text"  onChange={(e) => setSchool(e.target.value)} className="input-field" />
      </label><br></br>
      <label>
        Credits:
        <input type="number"  onChange={(e) => setCredits(e.target.value)} className="input-field" />
      </label><br></br>
      <button type="submit" onClick={addStudent}   className="submit-button">Add Student Details</button>
    </form>
      </div>
      <div className="students">
        <button onClick={getStudents}>Show Students</button>
        
        {studentlist.map((student, key) => {
          return(
            <div>
              <div>
				<table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Registration</th>
          <th>Branch</th>
          <th>School</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
          <tr key={student.reg}>
            <td>{student.name}</td>
            <td>{student.reg}</td>
            <td>{student.branch}</td>
            <td>{student.school}</td>
            <td>{student.credits}</td>
          </tr>
		  </tbody>
    </table>
              </div>


			<div>
			<input
                  type="text"
                  placeholder=""
                  onChange={(event) => {
                    setNewCredits(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateStudentCredits(student.id);
                  }}
                >
                  {" "}
                  Update
                </button>
				<button
                  onClick={() => {
                    deleteStudent(student.id);
                  }}
                >
                  Delete
                </button>
			</div>
            </div>
          )
        }
      )}
      
      </div>
      </div>
);
};

export default Student;
