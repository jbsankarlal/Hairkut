import React, { useContext } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../../context/AdminAuthContext';


const Navbar = () => {
    const { user, dispatch } = useContext(AdminAuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.clear();
        navigate('/vendor/login')
    }

    const handleLogin = () => {
        navigate('/vendor/login')
    }

    return (
        <div className='navbar' >
            <div className="navContainer">
                <span className='logo'>HAIRKUT.CO</span>
                <div className="navItems">

                    {user && <Link to="/vendor/viewVendorbookings" className="navLink">BOOKINGS</Link>}
                    {user && <Link to="/vendor/slotmanagement" className="navLink">SLOTS</Link>}
                    {user && <Link to="/vendor/addservice" className="navLink">SERVICES</Link>}
                    {user ? user.name : (<button className='logoutButton' onClick={handleLogin}>LOGIN</button>)}
                    {user && <button className='logoutButton' onClick={handleLogout}>LOGOUT</button>}

                </div>
            </div>
        </div>
    )
}

export default Navbar
