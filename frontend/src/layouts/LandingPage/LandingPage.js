import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';





const LandingPage = () => {
    const navigate = useNavigate();

    function gotoLogin() {
        navigate('/login');
    }
    
    return (
        <div className="landing-page">
            <header className="header">
                <h1>NYU Experiment Recruitement Platform</h1>
            </header>
            <main className="main-content">
                <p>Get paid to participate in the experiment</p>
                <div className="button-container">
                    <button className="button" onClick={gotoLogin}>Login as Student</button>
                    <button className="button" onClick={gotoLogin}>Login as Admin</button>
                </div>
            </main>
            <footer className="footer">
                <p>© 2023 NYU </p>
            </footer>
        </div>
    );
}

export default LandingPage;
