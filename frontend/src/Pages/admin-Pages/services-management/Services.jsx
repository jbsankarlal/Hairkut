import React from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import Table from '../../../Components/admin/tables/Table'
import './Services.css'

const Services = () => {
    return (
        <div className='service'>
            <div className="serviceGlass">
                <Sidebar />
                <div className='serviceTag'>
                    <h1>CONFIRM SERVICES</h1>
                    <Table />
                </div>

            </div>

        </div>
    )
}

export default Services
