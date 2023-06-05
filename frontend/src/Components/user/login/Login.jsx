import React, { useContext, useState } from 'react'
import './UserLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import axios from 'axios'
import { baseURL } from '../../../api/constants'

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });


    const { user, loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post(`${baseURL}/auth/login`, credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    console.log(user, "-------------user");

    return (
        <div className='containLogin'>
            <>

                <div className="wrapper1">
                    <div className="title">Login Form</div>
                    <form action="#">
                        <div className="field">
                            <input type="text" required="" id="username" placeholder='Enter Username' onChange={handleChange} />
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
                            <input disabled={loading} type="submit" onClick={handleClick} defaultValue="Login" />
                        </div>

                        {/* <button type="submit" onClick={handleClick}>Login</button> */}
                        <div>
                            {error && <span>{error.message}eroor message</span>}
                        </div>


                        <Link to="/register">
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

export default Login
