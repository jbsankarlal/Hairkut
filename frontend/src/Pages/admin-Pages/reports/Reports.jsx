import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import Table from '../../../Components/admin/tables/Table'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Reports.css'
import { baseURL } from '../../../api/constants';
import axios from 'axios';

const Reports = () => {
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [data, setData] = useState([])

    useEffect(() => {
        // fetchData()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        axios.post(`${baseURL}/users/get-report`, { fromDate, toDate }).then((res) => {
            setData(res.data)
        })
    }

    return (
        <div className='report'>
            <div className="reportGlass">
                <Sidebar />
                <div className="reportTag">

                    <h1>REPORTS</h1>
                    <form onSubmit={handleClick}>
                        <div className='dateTag'>
                            <h3>From date </h3>
                            <input type="date" id="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} name="date" />
                            <h3>To date </h3>
                            <input type="date" id="date" value={toDate} onChange={(e) => setToDate(e.target.value)} name="date" />
                            <button className="reportSearch" type='submit' >Search</button>
                        </div>
                    </form>

                    <Table rows={data} />
                </div>
            </div>

        </div>
    )
}

export default Reports
