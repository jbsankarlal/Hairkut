import React from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import Table from '../../../Components/admin/tables/Table'
import './Bookings.css'

const Bookings = () => {
    return (
        <div className='book'>
            <div className="bookGlass">
                <Sidebar />
                <div className='bookTag'>
                    <h1>BOOKING MANAGEMENT</h1>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Bookings
