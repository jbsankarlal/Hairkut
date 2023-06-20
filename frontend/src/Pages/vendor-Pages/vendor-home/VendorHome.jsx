import React from 'react'
import './VendorHome.css'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import Table from '../../../Components/vendor/table/Table'

const VendorHome = () => {
    return (
        <div>
            <Navbar />
            < div className='books' >
                <div className="booksGlass">
                    <div className='booksContainer'>
                        <h3>Excited to have you onboard!</h3>
                        <h1>YOUR RECENT BOOKINGS !!</h1>
                        <Table />
                    </div>
                </div>
            </ div>
        </div>
    )
}

export default VendorHome
