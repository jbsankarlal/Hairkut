import React from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import MainDash from '../../../Components/admin/mainDash/mainDash'
import RightSide from '../../../Components/admin/right-side/RightSide'

import "./Dashboard.css"
import '../../../App.css'



const Dashboard = () => {
    return (
        <div className='Desk'>
            <div className="deskGlass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
}

export default Dashboard
