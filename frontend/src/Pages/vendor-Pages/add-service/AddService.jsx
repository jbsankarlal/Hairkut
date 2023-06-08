import { color } from '@mui/system'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import './AddService.css'
import { baseURL } from '../../../api/constants'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AdminAuthContext } from '../../../context/AdminAuthContext'
import ServiceTab from '../../../Components/vendor/service-table/ServiceTab'


const AddService = () => {
    const [service, setService] = useState('');
    const [price, setPrice] = useState('');
    const [gender, setGender] = useState('');

    const { user } = useContext(AdminAuthContext)

    const navigate = useNavigate();
    // Handle input changes and update state
    const handleService = (event) => {
        setService(event.target.value);
    };

    const handleCost = (event) => {
        setPrice(event.target.value);
    };


    const handleGender = (event) => {
        setGender(event.target.value);
    };
    const saloonID = user._id

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${baseURL}/service`, { saloonID, service, price, gender }).then(() => {
            toast.success('SERVICE ADDED SUCCESSFULLY', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            navigate('/vendor/addservice')
            setService('')
            setPrice('')
            setGender('')
        }).catch((err) => {
            console.log(err, "errrr");
        })
        console.log(service, price, gender);
    };


    return (
        <div>
            <Navbar />
            <div className="adds">
                <div className="addsGlass">
                    <div className="addsContainer1">
                        <h1 style={{ color: 'red' }}>ADD NEW SERVICE</h1>
                        <div className="textWrapper">
                            <form onSubmit={handleSubmit}>

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
                                        <input className='inputAdd' type="number" value={price} onChange={handleCost} />
                                    </label>
                                </div>


                                <div className="textWrap">
                                    <label className='labelAdd'>
                                        Gender:
                                        <select className='inputAdd' value={gender} onChange={handleGender}>
                                            <option value="">Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Unisex</option>
                                        </select>
                                    </label>
                                </div>

                                <button className='yesSlotButton' type="submit" onClick={() => handleSubmit()}>Submit</button>

                            </form>

                        </div>
                    </div>
                    <div className="addsContainer2">
                        <h1>APPROVED SERVICES</h1>
                        <ServiceTab />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddService
