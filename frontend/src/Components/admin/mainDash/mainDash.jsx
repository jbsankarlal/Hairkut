import React from 'react'
import './mainDash.css'
import Cards from '../cards/Cards'
import Table from '../tables/Table'
import BookingTable from '../../../Components/admin/booking-table/BookingTable'



const mainDash = () => {
    return (
        <div className="MainDash">
            <h1 className='dashhead'>Dashboard</h1>
            <Cards />
            <BookingTable />
        </div >
    )
}

export default mainDash
