import "./Sidebar.css"
import '../../../App.css'
import React, { useState } from 'react'
import logo from '../../../imgs/logo.webp'
import { SidebarData } from "../../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    const [selected, setSelected] = useState(0);

    const navigate = useNavigate();

    const navigateToIndex = (item) => {
        navigate(`/admin/${item.heading}`);
    }

    const handleLogout = () => {
        navigate('/admin/login')
    }

    return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <img src={logo} alt="" className="logoImg" />
                    <span>
                        Hair<span>kut</span>.co
                    </span>
                </div>

                <div className="menu ">
                    {SidebarData.map((item, index) => {
                        return (
                            <div
                                className={selected === index ? "menuItem active" : "menuItem"}
                                key={index}
                                onClick={() => { navigateToIndex(item); setSelected(index); }}

                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>)
                    })}
                    <div className="menuItem" onClick={handleLogout}>
                        <UilSignOutAlt />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
