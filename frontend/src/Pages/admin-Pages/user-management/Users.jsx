import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import './Users.css'
import axios from 'axios';
import UserTable from '../../../Components/admin/user-table/user-table';
import { baseURL } from '../../../api/constants';
import Pagination from '../../../Components/admin/pagination/Pagination';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [pageNo, setPageNo] = useState(1)


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${baseURL}/users?page=${pageNo}&limit=8`);
            setUsers(res.data);
        };
        fetchUsers();
    }, [pageNo]);


    return (
        <div className='user'>
            <div className="userGlass">
                <Sidebar />
                <div className="userTag">
                    <h1>USER MANAGEMENT</h1>
                    <UserTable users1={users} setUsers={setUsers} />
                    <div className='page'><Pagination currentPag={pageNo} onPageChange={setPageNo} length={users.length} /></div>
                </div>
            </div>
        </div>
    )
}

export default Users
