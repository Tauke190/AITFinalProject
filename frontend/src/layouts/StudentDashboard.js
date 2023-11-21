import React from 'react';
import './StudentDashboard.css';
import Table  from '../components/Table/Table';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [experimentsData , setExperimentsData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BACKEND_URL}/api/student/experiments/`);
        const results = await response.json();
        if (results) {
          setExperimentsData(results);
        }
      } catch (error) {

      }
    }
    fetchData();
},[]);
 

  return (
    <div className="table-container">
      <Table data={experimentsData}/>
    </div>
  );
};

export default StudentDashboard;
