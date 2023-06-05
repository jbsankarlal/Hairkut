import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navbar' >
            <div className="navContainer">
                <span className='logo'>HAIRKUT.CO</span>
                <div className="navItems">
                    <Link to="/vendor/viewbookings" className="navLink">BOOKINGS</Link>
                    <Link to="/vendor/slotmanagement" className="navLink">SLOTS</Link>
                    <Link to="/vendor/paymentinfo" className="navLink">PAYMENTS</Link>
                    <Link to="/vendor/reporter" className="navLink">REPORTS</Link>
                    <Link to="/vendor/addservice" className="navLink">SERVICES</Link>
                    <Link to="/vendor/" className="navLink">LogOut</Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar
