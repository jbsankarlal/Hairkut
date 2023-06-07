import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../../api/constants';
import './vendorLoggin.css'
import axios from 'axios';
import { AdminAuthContext } from '../../../context/AdminAuthContext';

const VendorLoggin = () => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });


    const { user, loading, error, dispatch } = useContext(AdminAuthContext)


    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${baseURL}/saloons/login`, credentials);
            console.log(res, "ressss");
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/vendor/home")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };



    return (
        <div className='containLogin'>
            <>

                <div className="wrapper1">
                    <div className="title">HAIRKUT.CO</div>
                    <form action="#">
                        <div className="field">
                            <input type="email" required="" id="email" placeholder='Enter your mail id' onChange={handleChange} />
                            <label>Email Address</label>
                        </div>
                        <div className="field">
                            <input type="password" required="" id="password" placeholder='Enter Password' onChange={handleChange} />
                            <label>Password</label>
                        </div>
                        <div className="content">
                            <div className="checkbox">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <div className="pass-link">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <div className="field">
                            <input type="submit" onClick={handleClick} defaultValue="Login" />
                        </div>

                        {/* <button type="submit" onClick={handleClick}>Login</button> */}
                        <div>
                            {error && <span style={{ color: "red" }}>{error}</span>}
                        </div>


                        <Link to="/vendor">
                            <div className="signup-link">
                                Not a member? <a href="#">Signup now</a>
                            </div>
                        </Link>
                    </form>
                </div>
            </>

        </div>
    )
}

export default VendorLoggin
