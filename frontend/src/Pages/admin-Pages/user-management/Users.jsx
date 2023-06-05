import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Components/admin/sidebar/Sidebar'
import './Users.css'
import axios from 'axios';
import UserTable from '../../../Components/admin/user-table/user-table';
import { baseURL } from '../../../api/constants';


const Users = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`${baseURL}/users/`);
            setUsers(res.data);
        };
        fetchUsers();
    }, []);


    return (
        <div className='user'>
            <div className="userGlass">
                <Sidebar />
                <div className="userTag">
                    <h1>USER MANAGEMENT</h1>
                    <UserTable users1={users} setUsers={setUsers} />
                </div>
            </div>

        </div>
    )
}

export default Users
