import React from 'react';
import './signup.css';
import { useState } from 'react';
import Studentimg from './student.png';
import teacherimg from './teacher.png';
import ParticlesBg from "particles-bg";
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Handle sign-up form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        username,
        password
      });
      console.log(response.data);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  // Handle sign-in form submission
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signin', {
        username,
        password
      });
      setToken(response.data.token);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  // Handle protected route access
  const handleProtectedRoute = async () => {
    try {
      const response = await axios.get('http://localhost:3000/protected', {
        headers: {
          Authorization: token
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="App">
      <ParticlesBg type="balls" bg={true} />
      <h1>Sign Up</h1>
      <h1>TEACHER                STUDENT</h1>
      <div className='imgs'>
      <img src={teacherimg} alt='Teacher' className='img-item'></img>
      <img src={Studentimg} alt='Student' className='img-item'></img>
    </div>
      
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>

      <h1>Sign In</h1>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>

      {token && (
        <div>
          <h1>Protected Route</h1>
          <button onClick={handleProtectedRoute}>Access Protected Route</button>
        </div>
      )}
    </div>
  );
}

export default SignUp;
