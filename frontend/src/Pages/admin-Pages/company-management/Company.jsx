import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import Table from '../../../Components/admin/tables/Table'
import "./Company.css"
import axios from 'axios';
import SaloonTable from '../../../Components/admin/saloon-table/saloon-table';
import { baseURL } from '../../../api/constants';

const Company = () => {
    const [saloons, setSaloons] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${baseURL}/saloons/`);
            setSaloons(res.data);
        };
        fetchUsers();
    }, []);


    return (
        <div className='company'>
            <div className="companyGlass">
                <Sidebar />
                <div className='companyTag'>
                    <h1>COMPANY MANAGEMENT</h1>
                    <SaloonTable saloons1={saloons} setSaloons={setSaloons} />
                </div>

            </div>

        </div>
    )
}

export default Company
