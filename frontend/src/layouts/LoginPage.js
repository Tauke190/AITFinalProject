import axios from 'axios';
import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student
  const navigate = useNavigate();


  const handleLogin = () => {
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const postData = {
        firstName: username,
        passWord: password,
      };

    console.log(postData);
    
    const apiUrl = `${BASE_URL}/user/login`;

    axios.post(apiUrl, postData)
    .then(response => {
        console.log(response.data);
        if(response.data === "Correct"){
            if(role === 'student')
            {
                navigate('/student/dashboard');
            }
            else if(role === 'admin')
            {
                navigate('/admin/dashboard');
            }
        }
        else {
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
