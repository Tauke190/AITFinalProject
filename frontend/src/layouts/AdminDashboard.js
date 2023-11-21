import React from 'react';
import { CreateRequest } from '../components/CreateRequest/CreateRequest'; 

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