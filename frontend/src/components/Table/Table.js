import React from 'react';
import './Table.css';
import { useLocation, useNavigate } from 'react-router-dom';


const Table = ({data}) => {
  const navigate = useNavigate();



  const handleButtonClick = (rowData) => {
    console.log(rowData);
    navigate('/student/dashboard/register?title='+rowData.title);
  };

  console.log(data);

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
            <th>Action</th> {/* New clickable column */}
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
              <td>
                <button onClick={() => handleButtonClick(row)}> Register </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
