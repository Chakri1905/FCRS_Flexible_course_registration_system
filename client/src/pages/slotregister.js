import React from 'react';
import { useState } from 'react';
import ParticlesBg from 'particles-bg';
import Axios from "axios";
import "./slotregister.css";

const  SlotRegistered= () => {
	const [courselist, setcourselist] = useState([]);
	const getcourses = () => {
		Axios.get("http://localhost:3001/courses").then((response) => {
		  setcourselist(response.data);
		});
	  };
return (
	<div>
	<h1>Available slots</h1>
	<ParticlesBg type="square" bg={true} />
	 <div className="courses">
	   <button onClick={getcourses}>Show courses</button>
	   
	   {courselist.map((course, key) => {
		 return(
		   <div>
			 <div>
			   <table className="courses-table">
	 <thead>
	   <tr>
		 <th>course Name</th>
		 <th>course code</th>
		 <th>Faculty</th>
		 <th>Slot</th>
		 <th>code</th>
	   </tr>
	 </thead>
	 <tbody>
		 <tr key={course.course_name}>
			<td>{course.course_name}</td>
		   <td>{course.course_code}</td>
		   <td>{course.faculty_name}</td>
		   <td>{course.slot}</td>
		   <td>{course.code}</td>
		 </tr>
		 </tbody>
   </table>
 </div>
</div>
)})}
</div>
</div>
);
};

export default SlotRegistered;
