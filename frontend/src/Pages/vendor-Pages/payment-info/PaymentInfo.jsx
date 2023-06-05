import React from 'react'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import Table from '../../../Components/vendor/table/Table'
import './PaymentInfo.css'

const PaymentInfo = () => {
    return (
        <div>
            <Navbar />
            < div className='pays' >
                <div className="paysGlass">

                    <div className='paysContainer'>
                        <h1>PAYMENT INFORMATION</h1>
                        <Table />
                    </div>
                </div>
            </ div>

        </div>
    )
}

export default PaymentInfo
