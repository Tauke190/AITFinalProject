import React from 'react';
import { CreateRequest } from '../components/CreateExperiment/CreateExperiment'; 

function helloWorld(){

}

function AdminDashboard() {
  return (
    <div className="admindashboard">
     <CreateRequest isVisible={true} onClose={helloWorld} />
    </div>
  );
}

export default AdminDashboard;