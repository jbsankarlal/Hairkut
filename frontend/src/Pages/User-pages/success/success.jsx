import React from 'react';
import './success.css';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="success-container">
            <div className="success-content">
                <h1 className="success-heading">Success!</h1>
                <p className="success-message">Your booking has been successfully placed.</p>
                <p className="thank-you-message">Thank you for taking our Service.</p>
                <button className='confirm' onClick={handleClick}>Go to home page</button>
            </div>
        </div>
    );
}

export default SuccessPage;
