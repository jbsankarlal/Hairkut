import React, { useContext, useEffect, useState } from 'react'
import './booking.css'
import axios from 'axios'
import { baseURL } from '../../../api/constants'
import { AuthContext } from '../../../context/AuthContext'

const Booking = () => {
    const [data, setData] = useState([]);
    const [isCancelled, setIsCancelled] = useState(false);

    const handleCancel = () => {
        setIsCancelled(true);
    };
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        axios.get(`${baseURL}/users/get-bookings/${user.username}`).then((res) => {
            setData(res.data)

        })
    }
    return (
        <div className='bookingContainer'>
            <table className="booking-table">
                <thead>
                    <tr>
                        <th>SLNo.</th>
                        <th>Date</th>
                        <th>Saloon</th>
                        <th>Address</th>
                        <th>Distance</th>
                        <th>Count</th>
                        <th>Slot Details</th>
                        <th>Amount</th>
                        <th>Cancellation</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length && data.map((booking, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{booking.date}</td>
                            <td>{booking.saloon}</td>
                            <td>{booking.saloonAddress}</td>
                            <td>{booking.saloonDistance}</td>
                            <td>{booking.count}</td>
                            <td>
                                <ul>
                                    {booking.slotDetails.length &&
                                        booking.slotDetails.map((element, index) => (
                                            <li key={index}>Start Time :{element.startTime} to End Time : {element.endTime}</li>
                                        ))}
                                </ul>

                            </td>
                            <td>₹{booking.amount / 100}</td>
                            <td>
                                <button className={isCancelled ? 'cancel' : 'cancel'} onClick={handleCancel}>
                                    {isCancelled ? 'CANCELLED' : 'CANCEL'}
                                </button>
                            </td>
                        </tr>
                    )

                    )}

                </tbody>
            </table>

        </div>
    )
}

export default Booking
