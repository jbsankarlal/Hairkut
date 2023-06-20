import React from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import './Bookings.css'
import BookingTable from '../../../Components/admin/booking-table/BookingTable'
import Pagination from '../../../Components/admin/pagination/Pagination';

const Bookings = () => {

    return (
        <div className='book'>
            <div className="bookGlass">
                <Sidebar />
                <div className='bookTag'>
                    <h1>BOOKING MANAGEMENT</h1>
                    <BookingTable />
                </div>
            </div>
        </div>
    )
}

export default Bookings
