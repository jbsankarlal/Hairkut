import React from 'react'
import Register from '../../../Components/user/register/Register'
import Navbar from '../../../Components/user/navbar/Navbar'
import { Toaster } from 'react-hot-toast'

function Registration() {
    return (
        <div className='regisContainer'>
            <Navbar />
            <Register />
        </div>
    )
}

export default Registration