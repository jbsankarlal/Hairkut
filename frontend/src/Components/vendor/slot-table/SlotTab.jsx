import React, { useContext, useEffect, useState } from 'react'
import './SlotTab.css'
import { AdminAuthContext } from '../../../context/AdminAuthContext'
import axios from 'axios'
import { baseURL } from '../../../api/constants'
import { toast } from 'react-toastify'


const ServiceTab = () => {
    const [slots, setSlots] = useState([])

    const { user } = useContext(AdminAuthContext)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get(`${baseURL}/slots/get-slots?id=${user._id}`).then((res) => {
            console.log(res, "data adaaaaaaaaaaaaaaaaaaaa");
            setSlots(res.data)
        })
    }


    const handleDelete = (id) => {
        axios.delete(`${baseURL}/slots/${id}`).then((res) => {
            toast.success('SLOT DELETED', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            fetchData()
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SLNo.</th>
                        <th>Service Name</th>
                        <th>Slot Number</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {slots.length && slots.map((slot, index) => (
                        <tr key={slot.id}>
                            <td>{index + 1}</td>
                            <td>{slot.service}</td>
                            <td>{slot.slotNumber}</td>
                            <td>{slot.startTime}</td>
                            <td>{slot.endTime}</td>
                            <td><button className='cancel' onClick={() => handleDelete(slot._id)}>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ServiceTab
