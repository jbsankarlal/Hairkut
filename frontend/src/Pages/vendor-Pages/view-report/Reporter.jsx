import React, { useState } from 'react'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import Table from '../../../Components/vendor/table/Table'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Reporter.css'

const Reporter = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <Navbar />
            <div div className='reporter' >
                <div className="reporterGlass">
                    <div className="reporterContainer">
                        <h1>REPORTS</h1>
                        <div className='dateTag'>
                            <h3>From date <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> </h3>
                            <h3>To date  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> </h3>
                            <button className="reportSearch">Search</button>
                        </div>
                        <Table />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Reporter
