import { useState } from "react"; // Import useState here
import closebutton from "./cross1.png";
import "./CreateExperiment.css";

export function CreateRequest({ isVisible, onClose, timeOptions }) {
  
  const mockStudent = {
    name: "Ted Mosby",
    netid: "tm2005"
  };
  const [selectedTime, setSelectedTime] = useState('');
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const apiUrl = `${BACKEND_URL}/api/admin/postexperiment`;


  const handleOptionChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <form
      action= {apiUrl}
      method = "POST"
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
