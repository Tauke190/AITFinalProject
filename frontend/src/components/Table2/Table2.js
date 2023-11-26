// For Admin
import React from 'react';
import './Table2.css';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';


const Table2 = ({data}) => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;


  const handleButtonClick = (rowData , myexperiments) => {
   
    const postData = {
      experimentName : rowData.title,
    };

  const apiUrl = `${BASE_URL}/user/experiment/unregister`;

  axios.post(apiUrl, postData)
  .then(response => {
      console.log(response.data);
     
  })
  .catch(error => {
      console.error('Error:', error);
  });

  window.location.reload(false);
  };


  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th> Title </th>
            <th> Description</th>
            <th> Compensation</th>
            <th> Time Required</th>
            <th> Current Status</th>
            {/* <th>Action</th>  */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id}>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td>{row.TimeRequired}</td>
              <td>{row.HourlyRate}</td>
              <td>{row.CurrentStatus}</td>
              {/* <td>
                <button className="cancelbutton" onClick={() => handleButtonClick(row)}> Cancel </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
