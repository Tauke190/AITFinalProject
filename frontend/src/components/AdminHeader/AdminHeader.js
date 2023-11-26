import React from 'react';
import './AdminHeader.css'; 
import { useNavigate } from 'react-router-dom';


const AdminHeader = () => {

    const navigate = useNavigate();

    function createExperiment(){
        navigate('/admin/experiment')
    }
    return (
        <header className="dashboard-header">
            <div className="logo-container">
                <img src="https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg" alt="School Logo" className="school-logo" />
            </div>
            <nav className="dashboard-nav">
                <ul>
                    <button className="button" onClick={createExperiment}>Create Experiment</button>
                </ul>
            </nav>
            <div className="user-account">
                <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="User Avatar" className="user-avatar" />
                <span className="user-name">Test Admin</span>
            </div>
        </header>
    );
};

export default AdminHeader;
