import { useState } from "react"; // Import useState here
import closebutton from "./cross1.png";
import "./CreateExperiment.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function CreateExperiment({ isVisible, onClose, timeOptions }) {
  
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [HourlyRate, setHourlyrate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const apiUrl = `${BACKEND_URL}/api/admin/postexperiment`;


  const handleOptionChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const postData = {
        title: title,
        description: description,
        Hourlyrate : HourlyRate,
        TimeRequired : selectedTime,
      };

    axios.post(apiUrl, postData)
    .then(response => {
        console.log(response.data);
       
    })
    .catch(error => {
        console.error('Error:', error);
    });
    navigate('/admin/dashboard');
  };



  return (
    <form onSubmit={handleFormSubmit}
      id="createRequestComponent"
      className={`create-request-component-student ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="title-container">
        <h1 className="create-request-title">Create Experiment</h1>
        <img src={closebutton} className="close-button" onClick={onClose} />
      </div>
      <div className="input-group issue-title-group">
        <label htmlFor="issueTitle" className="issue-title-label">
          Experiment Title
        </label>
        <input
          type="text"
          id="title"
          className="issue-title-input"
          required
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input-group description-group">
        <label htmlFor="description" className="description-label">
          Description
        </label>
        <textarea
          id="description"
          className="description-input"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="input-group issue-title-group">
        <label htmlFor="issueTitle" className="issue-title-label">
          HourlyRate(in $)
        </label>
        <input
          type="text"
          id="Hourlyrate"
          className="issue-title-input"
          required
          name="Hourlyrate"
          onChange={(e) => setHourlyrate(e.target.value)}
        />
      </div>

      <div className="time-select">
      <label htmlFor="dropdown">Time Required:</label>
      <select name="TimeRequired" id="TimeRequired" value={selectedTime} onChange={handleOptionChange}>
        <option value="">Select the Time</option>
        <option value="1">1 hour</option>
        <option value="2">2 hour</option>
        <option value="3">3 hour</option>
        <option value="4">4 hour</option>
      </select>
    </div>
      
      <div className="submit-button-container">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}