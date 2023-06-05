import { color } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import './AddService.css'


const AddService = () => {
    const [service, setService] = useState('');
    const [cost, setCost] = useState('');
    const [discount, setDiscount] = useState('');


    const navigate = useNavigate();
    // Handle input changes and update state
    const handleService = (event) => {
        setService(event.target.value);
    };

    const handleCost = (event) => {
        setCost(event.target.value);
    };


    const handleDiscount = (e) => {
        let enteredDiscount = e.target.value;

        // Remove any non-digit characters from the entered discount
        enteredDiscount = enteredDiscount.replace(/\D/g, '');

        // Limit the discount to a maximum of 50
        if (enteredDiscount > 50) {
            enteredDiscount = 50;
        }

        setDiscount(enteredDiscount);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the input values, such as sending them to a server or updating state in a parent component
        console.log(service, cost, discount);
    };


    return (
        <div>
            <Navbar />
            <div className="adds">
                <div className="addsGlass">
                    <div className="addsContainer1">
                        <h1 style={{ color: 'red' }}>ADD NEW SERVICE</h1>
                        <div className="textWrapper">
                            <form1 onSubmit={handleSubmit}>

                                <div className="textWrap">
                                    <label className='labelAdd'>
                                        Service Name:
                                        <select className='inputAdd' value={service} onChange={handleService}>
                                            <option value="">Select a service</option>
                                            <option value="haircut">Haircut</option>
                                            <option value="facial">Facial</option>
                                            <option value="beard">Beard</option>
                                            <option value="bridal makeup">Bridal Makeup</option>
                                            <option value="mehendi">Mehendi</option>
                                        </select>
                                    </label>
                                </div>


                                <div className="textWrap">
                                    <label className='labelAdd'>
                                        Service Cost:
                                        <input className='inputAdd' type="number" value={cost} onChange={handleCost} />
                                    </label>
                                </div>

                                <div className="textWrap">
                                    <label className='labelAdd'>
                                        Service Discount:
                                        <input className='inputAdd' type="number" value={discount} onChange={handleDiscount} />
                                    </label>
                                </div>

                                <div className="textWrap">
                                    <label className='labelAdd'>
                                        Gender:
                                        <select className='inputAdd' value={discount} onChange={handleDiscount}>
                                            <option value="">Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </label>
                                </div>

                                <button className='yesSlotButton' type="submit" onClick={() => navigate('/vendor/slotmanagement')}>Submit</button>

                            </form1>

                        </div>
                    </div>
                    <div className="addsContainer2">
                        <h1>APPROVED SERVICES</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddService
