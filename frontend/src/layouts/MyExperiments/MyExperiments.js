import React from 'react';
import './MyExperiments.css';
import Table1  from '../../components/Table1/Table1';
import { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';


const MyExperiment = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [experimentsData , setExperimentsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BACKEND_URL}/api/student/myexperiments/`);
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
    <div>
      <DashboardHeader/>
      <Table1 data={experimentsData}/>
    </div>
  );
};

export default MyExperiment;
