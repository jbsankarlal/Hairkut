import React from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import PayTable from '../../../Components/admin/pay-table/PayTable'
import "./Fund-Transfer.css"

const FundTransfer = () => {
    return (
        <div className='payment'>
            <div className="paymentGlass">
                <Sidebar />
                <div className='paymentTag'>
                    <h1>FUND TRANSFER</h1>
                    <PayTable />
                </div>
            </div>
        </div>
    )
}

export default FundTransfer
