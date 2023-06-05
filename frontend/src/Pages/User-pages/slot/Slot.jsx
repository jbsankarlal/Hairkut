import React from 'react';
import Navbar from '../../../Components/user/navbar/Navbar'
import Header from '../../../Components/user/header/Header'
import './Slot.css'

import { useState } from "react";

const Slot = () => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [timeSlots, setTimeSlots] = useState([]);

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Convert start and end time to date objects
        const startDate = new Date(`01/01/2000 ${startTime}`);
        const endDate = new Date(`01/01/2000 ${endTime}`);

        // Calculate time slots between start and end time
        const timeSlotDuration = 30; // minutes
        let currentTime = startDate;
        let slots = [];

        while (currentTime < endDate) {
            const startTime = currentTime.toLocaleTimeString([], { timeStyle: "short" });
            currentTime.setMinutes(currentTime.getMinutes() + timeSlotDuration);
            const endTime = currentTime.toLocaleTimeString([], { timeStyle: "short" });
            slots.push(`${startTime} - ${endTime}`);
        }

        setTimeSlots(slots);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="slotContainer">
                <form onSubmit={handleSubmit}>
                    <label>
                        Start Time:
                        <input type="time" value={startTime} onChange={handleStartTimeChange} />
                    </label>
                    <br />
                    <label>
                        End Time:
                        <input type="time" value={endTime} onChange={handleEndTimeChange} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <br />
                {timeSlots.length > 0 && (
                    <div>
                        <button className="slotButton">Time Slot:</button>
                        <ul className='slotListWrapper'>
                            {timeSlots.map((slot, index) => (
                                <li className='slotList' key={index} > <button className="slotButtons">{slot}</button></li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div >

    );
};

export default Slot;
