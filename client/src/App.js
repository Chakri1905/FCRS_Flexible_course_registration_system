import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Student from './pages/student';
import Registered from './pages/registered';
import SlotRegister from './pages/slotregister';
import TeacherRegistration from './pages/teacher';
import SignUp from './pages/signup';
import Facultycourses from './pages/facultycourses';
import Facultyrating from './pages/facultyrating';
function App() {
    
  return (
    <div className="App">
    <div className='Nav-bar'>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/student'  element={<Student />} />
        <Route path='/registered' element={<Registered />} />
        <Route path='/slotregister' element={<SlotRegister />} />
        <Route path='/teacher'  element={<TeacherRegistration />}/>
        <Route path='/sign-up'  element={<SignUp />} />
        <Route path='/facultyrating'  element={<Facultyrating />} />
        <Route path='/facultycourses' element={<Facultycourses/>}/>
      </Routes>
    </Router>
      </div>
    </div>
  );
}

export default App;
