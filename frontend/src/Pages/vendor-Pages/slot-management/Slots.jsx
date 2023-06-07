import React, { useContext, useState } from 'react';
import Navbar from '../../../Components/vendor/navbar/Navbar';
import './Slots.css';
import axios from 'axios';
import { baseURL } from '../../../api/constants';
import { AdminAuthContext } from '../../../context/AdminAuthContext';
import { toast } from 'react-toastify';

const Slots = () => {
    const [service, setService] = useState('');
    const [slotNumber, setSlotNumber] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');


    const { user } = useContext(AdminAuthContext)

    const handleService = (event) => {
        setService(event.target.value);
    };

    const handleSlotNumber = (event) => {
        setSlotNumber(event.target.value);
    };

    const handleStartTime = (event) => {
        setStartTime(event.target.value);
        setEndTime(''); // Reset end time when start time changes
    };

    const handleEndTime = (event) => {
        setEndTime(event.target.value);
    };

    const saloonID = user._id
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${baseURL}/slots/`, { service, startTime, endTime, slotNumber, saloonID })
        toast.success('SLOT ADDED SUCCESSFULLY', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })

        console.log(service, slotNumber, startTime, endTime);
    };



    const endTimeOptions = [
        { label: '10:00 am', value: '10:00 am' },
        { label: '12:00 pm', value: '12:00 pm' },
        { label: '14:00 pm', value: '14:00 pm' },
        { label: '16:00 pm', value: '16:00 pm' },
        { label: '18:00 pm', value: '18:00 pm' },
        { label: '20:00 pm', value: '20:00 pm' },
    ];

    return (
        <div>
            <Navbar />
            <div className="adds">
                <div className="addsGlass">
                    <div className="addsContainer1">
                        <h1 style={{ color: 'red' }}>ADD A TIME SLOT</h1>
                        <div className="textWrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="textWrap">
                                    <label htmlFor="dropdown">Choose a service:</label>
                                    <select id="dropdown" value={service} onChange={handleService}>
                                        <option value="">Please choose a service</option>
                                        <option value="Hair cut">Hair cut</option>
                                        <option value="Facial">Facial</option>
                                        <option value="Beard">Beard</option>
                                        <option value="Bridal Makeup">Bridal Makeup</option>
                                        <option value="Mehendi">Mehendi</option>
                                    </select>
                                </div>

                                <div className="textWrap">
                                    <label htmlFor="slotDropdown">Choose a slot no.:</label>
                                    <select id="slotDropdown" value={slotNumber} onChange={handleSlotNumber}>
                                        <option value="">Please choose a slot no.</option>
                                        <option value="HK1">HK1</option>
                                        <option value="HK2">HK2</option>
                                        <option value="HK3">HK3</option>
                                        <option value="HK4">HK4</option>
                                        <option value="HK5">HK5</option>
                                        <option value="HK6">HK6</option>
                                    </select>
                                </div>

                                <div className="textWrap">
                                    <label htmlFor="startTimeDropdown">Choose a start time:</label>
                                    <select id="startTimeDropdown" value={startTime} onChange={handleStartTime}>
                                        <option value="">Please choose a start time</option>
                                        <option value="08:00 am">08:00 am</option>
                                        <option value="10:00 am">10:00 am</option>
                                        <option value="12:00 pm">12:00 pm</option>
                                        <option value="14:00 pm">14:00 pm</option>
                                        <option value="16:00 pm">16:00 pm</option>
                                        <option value="18:00 pm">18:00 pm</option>
                                    </select>
                                </div>

                                <div className="textWrap">
                                    <label htmlFor="endTimeDropdown">Choose an end time:</label>
                                    <select id="endTimeDropdown" value={endTime} onChange={handleEndTime}>
                                        <option value="">Please choose an end time</option>
                                        {endTimeOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                disabled={option.value <= startTime}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button className="confirm" type="submit" onClick={() => handleSubmit}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        {/* <button className="yesSlotButton">Add new time slot +</button> */}
                    </div>
                    <div className="addsContainer2">
                        <h1>ADDED TIME SLOTS</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slots;
