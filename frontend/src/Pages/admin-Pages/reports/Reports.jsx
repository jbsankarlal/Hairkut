import React, { useState } from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import Table from '../../../Components/admin/tables/Table'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Reports.css'

const Reports = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='report'>
            <div className="reportGlass">
                <Sidebar />
                <div className="reportTag">

                    <h1>REPORTS</h1>
                    <div className='dateTag'>
                        <h3>From date <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> </h3>

                        <h3>To date  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> </h3>
                        <button className="reportSearch">Search</button>
                    </div>

                    <Table />
                </div>
            </div>

        </div>
    )
}

export default Reports
