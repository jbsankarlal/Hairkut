import React from 'react'
import './AdminLog.css'
import { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../../api/constants'
import { useNavigate } from 'react-router-dom'

const AdminLog = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        try {
            axios.post(`${baseURL}/auth/admin-login`, { email, password }).then((res) => {
                navigate('/admin/dashboard')
            }).catch(() => {
                setError("Invalid Credentials")
            })
        } catch (error) {
            setError("Invalid Credentials")
        }
    }

    return (
        <div className='containLogin'>
            <>

                <div className="wrapper1">
                    <div className="title">HAIRKUT.CO</div>
                    <form action="#">
                        <div className="field">
                            <input type="email" required="" id="email" value={email} placeholder='Enter your mail id' onChange={(e) => setEmail(e.target.value)} />
                            <label>Email Address</label>
                        </div>
                        <div className="field">
                            <input type="password" required="" id="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <div className="content">

                            <div className="pass-link">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <div className="field">
                            <input type="submit" onClick={handleClick} defaultValue="Login" />
                        </div>
                        <p>{error}</p>


                    </form>
                </div>
            </>

        </div>
    )
}

export default AdminLog
