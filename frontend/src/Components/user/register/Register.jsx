import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../../../api/constants';
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        gender: '',
    });



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.mobile || !formData.password || !formData.confirmPassword || !formData.gender) {
            toast.success('PLEASE FILL ALL THE FIELDS', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.success('INCORRECT PASSWORD! TRY AGAIN!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return;
        }

        try {
            const res = await axios.post(`${baseURL}/auth/register`, formData);
            console.log(res.data);
            const status = res.status
            toast.success('REGISTERED SUCCESSFULLY', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            navigate('/login')


        } catch (err) {
            console.error(err);
        }
    };



    return (


        <div className='containRegister'>
            <div className="container1">
                <div className="title1" >HAIRKUT.CO   -  Registration</div>
                <div className="content1">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    required=""
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required=""
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter your number"
                                    required=""
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required=""
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    required=""
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input
                                type="radio"
                                name="gender"
                                id="dot-1"
                                value="male"
                                onChange={handleChange}
                            />
                            <input
                                type="radio"
                                name="gender"
                                id="dot-2"
                                value="female"
                                onChange={handleChange}
                            />
                            <input
                                type="radio"
                                name="gender"
                                id="dot-3"
                                value="prefer-not-to-say"
                                onChange={handleChange}
                            />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one" />
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two" />
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three" />
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div className="button1">
                            <input onClick={handleSubmit} type="submit" defaultValue="Register" />
                        </div>
                    </form>
                    <Link to="/login">
                        <div style={{ textAlign: "center" }}>LOGIN</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
