import React from 'react'
import './ViewBookings.css'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import Table from '../../../Components/vendor/table/Table'

const ViewBookings = () => {
    return (
        <div>
            <Navbar />
            < div className='books' >
                <div className="booksGlass">

                    <div className='booksContainer'>
                        <h1>BOOKINGS FOR YOU</h1>
                        <Table />
                    </div>
                </div>
            </ div>
        </div>
    )
}

export default ViewBookings
