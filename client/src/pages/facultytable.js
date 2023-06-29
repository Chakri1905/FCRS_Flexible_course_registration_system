import React, { useState } from 'react';
import './facultytable.css';
import ParticlesBg from 'particles-bg';
import Axios  from 'axios';
const FacultyTable = () => {
  const [facultyname, setfacultyname]= useState([]);
  const [facultuid,setfacultyid]=useState([]);
  const [facultyschool, setfacultyschool]=useState([]);
  const [designation,setdesignation]=useState([]);
  const [email,setemail]=useState([]);
  const [credits,setCredits]=useState([]);
  const [facultyList, setFacultyList] = useState([]);
  // const [newFaculty, setNewFaculty] = useState([]);


const handleSubmit=(e)=>{
  e.preventDefult();
};

const addFaculty=()=>{
  Axios.post("http://localhost:3001/createFaculty",{
    facultyname:facultyname,
    facultuid:facultuid,
    facultyschool:facultyschool,
    designation:designation,
    email:email,
    credits:credits,
   }).then(()=>{
    setFacultyList([...facultyList,{
      facultyname:facultyname,
    facultuid:facultuid,
    facultyschool:facultyschool,
    designation:designation,
    email:email,
    credits:credits,
  },
]);
   });
  };

   const getFaculty=()=>{
    Axios.get("http://localhost:3001/Faculty").then((response)=>{
      setFacultyList(response.data);
    });
   };

return(
  
  <div className='body'>
    
    {/* <h1>Faculty Registration</h1> */}
    <div>
    <ParticlesBg type="circle" bg={true} />
      <form onSubmit={handleSubmit} className='faculty-credits'>
      <label>
          Faculty Name:
          <input
            type="text"
            name="facultyname"
            className="input-field"
            onChange={(e)=>setfacultyname(e.target.value)}
          />
        </label>
        <br />
        <label>
          Faculty ID:
          <input
            type="text"
            name="facultyid"
            className="input-field"
            onChange={(e)=>setfacultyid(e.target.value)}
          />
        </label>
        <br />
        <label>
          Faculty School:
          <input
            type="text"
            name="facultyschool"
            className="input-field"
            onChange={(e)=>setfacultyschool(e.target.value)}
          />
        </label>
        <br />
        <label>
          Designation:
          <input
            type="text"
            name="designation"
            className="input-field"
            onChange={(e)=> setdesignation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            className="input-field"
            onChange={(e)=>setemail(e.target.value)}
          />
        </label>
        <label>
          Credits:
          <input
            type="number"
            name="credits"
            className="input-field"
            onChange={(e)=>setCredits(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={addFaculty}   className="submit-button">Add Faculty Details</button>
      </form>
    </div> 
    <div  className="Faculty">
      <button onClick={getFaculty}>Show Faculty</button>
      {facultyList.map((faculty,key)=>{
         <ParticlesBg type="circle" bg={true} />
        return(
          <div>
            <div>
            <table className="faculty-table">
        <thead>
       
          <tr>
            <th>Faculty Name</th>
            <th>Faculty ID</th>
            <th>Faculty School</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          
            <tr key={faculty.facultyname}>
              <td>{faculty.facultyname}</td>
              <td>{faculty.facultyid}</td>
              <td>{faculty.facultyschool}</td>
              <td>{faculty.designation}</td>
              <td>{faculty.email}</td>
              <td>{faculty.password}</td>
            </tr>
        </tbody>
      </table>
      </div>
      </div>
        )
      }
      )
      }
      
    </div>
    
  </div>
);
};
export default FacultyTable;
