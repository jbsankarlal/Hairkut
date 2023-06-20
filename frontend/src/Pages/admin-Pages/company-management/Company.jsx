import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import Table from '../../../Components/admin/tables/Table'
import "./Company.css"
import axios from 'axios';
import SaloonTable from '../../../Components/admin/saloon-table/saloon-table';
import { baseURL } from '../../../api/constants';
import Pagination from '../../../Components/admin/pagination/Pagination';

const Company = () => {
    const [saloons, setSaloons] = useState([]);
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${baseURL}/saloons/all?page=${pageNo}&limit=8`);
            setSaloons(res.data);
        };
        fetchUsers();
    }, [pageNo]);


    return (
        <div className='company'>
            <div className="companyGlass">
                <Sidebar />
                <div className='companyTag'>
                    <h1>COMPANY MANAGEMENT</h1>
                    <SaloonTable saloons1={saloons} setSaloons={setSaloons} />
                    <div className='page'><Pagination currentPag={pageNo} onPageChange={setPageNo} length={saloons.length} /></div>
                </div>
            </div>
        </div>
    )
}

export default Company
