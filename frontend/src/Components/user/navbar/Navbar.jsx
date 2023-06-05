import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { AuthContext } from '../../../context/AuthContext'

const Navbar = () => {

    const navigate = useNavigate()
    const { user, dispatch } = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.clear();
        navigate("/")
    }

    return (
        <div className='navbar' >
            <div className="navContainer">
                <Link to='/' style={{ color: 'inherit', textDecoration: "none" }}>
                    <span className='logo'>HAIRKUT.CO</span>
                </Link>

                <div>
                    {user ? user.username
                        : (<div className="navItems">
                            <Link to='/register'>
                                <button className="navButton">Sign Up</button>
                            </Link>
                            <Link to="./login">
                                <button className="navButton">Login</button>
                            </Link>
                        </div>)}
                    {user && <button className='logoutButton' onClick={handleLogout}>LOGOUT</button>}
                </div>




            </div>
        </div >
    )
}

export default Navbar
