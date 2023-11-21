import React, { useState } from 'react';
import './ExperimentRegistration.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function ExperimentRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const experiment = queryParams.get('title');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const postData = {
        name: name,
        email: email,
        date : date,
        time : time,
        experiment : experiment,
      };

    const apiUrl = 'http://localhost:5000/user/experiment/register';

    axios.post(apiUrl, postData)
    .then(response => {
        console.log(response.data);
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
    navigate('/student/dashboard');
   
  };

  return (
    <div className="form-container">
      <h1> Register for Experiment </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I consent to this experiment
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExperimentRegistration;
