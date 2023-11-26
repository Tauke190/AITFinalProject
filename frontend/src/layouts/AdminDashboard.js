import React from 'react';
import './AdminDashBoard.css';
import Table2  from '../components/Table2/Table2';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader/AdminHeader'

const AdminDashboard = () => {
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
    <div>
      <AdminHeader/>
      <Table2 data={experimentsData}/>
    </div>
  );
};

export default AdminDashboard;
