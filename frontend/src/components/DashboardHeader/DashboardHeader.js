import React from 'react';
import './DashboardHeader.css'; 
import { useNavigate } from 'react-router-dom';




const DashboardHeader = () => {

    const navigate = useNavigate();

    function gotoMyExperiments(){
        navigate('/student/myexperiments')
    }


    function gotoDashboard(){
        navigate('/student/dashboard')
    }
    return (
        <header className="dashboard-header">
            <div className="logo-container">
                <img src="https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg" alt="School Logo" className="school-logo" />
            </div>
            <nav className="dashboard-nav">
                <ul>
                    <button className="button" onClick={gotoDashboard}>Dashboard</button>
                    <button className="button" onClick={gotoMyExperiments}>My experiments</button>
                </ul>
            </nav>
            <div className="user-account_student">
                <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" alt="User Avatar" className="user-avatar" />
                <span className="user-name">Test1</span>
            </div>
        </header>
    );
};

export default DashboardHeader;
