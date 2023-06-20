import React from 'react'
import './BankInfo.css'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { baseURL } from '../../../api/constants'

const BankInfo = () => {

    const [accountNo, setAccountNo] = useState('');
    const [fullName, setFullName] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [upi, setUpi] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [pan, setPan] = useState('');

    const navigate = useNavigate();
    // Handle input changes and update state

    const handleAccountNo = (event) => {
        setAccountNo(event.target.value);
    };

    const handleFullName = (event) => {
        setFullName(event.target.value);
    };

    const handleIfsc = (event) => {
        setIfsc(event.target.value);
    };
    const handleUpi = (event) => {
        setUpi(event.target.value);
    };

    const handleMobile = (event) => {
        setMobile(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePan = (event) => {
        setPan(event.target.value);
    };


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${baseURL}/saloons/bankinfo`, { accountNo, fullName, ifsc, upi, mobile, email, pan }).then(() => {
            toast.success('REGISTRATION COMPLETED SCCESSFULLY', {
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
        }).catch((err) => {
            console.log(err, "errrr");
        })

    };
    return (
        <div>
            <Navbar />
            <div className="bank">
                <div className="bankGlass">

                    <div className="bankContainer">
                        <h1>Please provide Banking Information</h1>

                        <form onSubmit={handleSubmit}>

                            <div className="textWrap">
                                <label className='labelRegis'>
                                    Bank Account Number:
                                    <input className='inputRegis' type="text" value={accountNo} onChange={handleAccountNo} />
                                </label>
                            </div>

                            <div className="textWrap">
                                <label className='labelRegis'>
                                    Full name of the Account Holder:
                                    <input className='inputRegis' type="text" value={fullName} onChange={handleFullName} />
                                </label >
                            </div>

                            <div className="textWrap">
                                <label className='labelRegis'>
                                    IFSC Code:
                                    <input className='inputRegis' type="text" value={ifsc} onChange={handleIfsc} />
                                </label>
                            </div>

                            <div className="textWrap">
                                <label className='labelRegis'>
                                    UPI ID:
                                    <input className='inputRegis' type="text" value={upi} onChange={handleUpi} />
                                </label >
                            </div>



                            <div className="textWrap">
                                <label className='labelRegis'>
                                    Registered Mobile Number:
                                    <input className='inputRegis' type="text" value={mobile} onChange={handleMobile} />
                                </label >
                            </div>

                            <div className="textWrap">
                                <label className='labelRegis'>
                                    Registered Email ID:
                                    <input className='inputRegis' type="email" value={email} onChange={handleEmail} />
                                </label >
                            </div>

                            <div className="textWrap">
                                <label className='labelRegis'>
                                    PAN CARD number:
                                    <input className='inputRegis' type="text" value={pan} onChange={handlePan} />
                                </label >
                            </div>

                            <div className="buttons">
                                <button className='noButton' type="button">Cancel</button>
                                <button className='yesButton1' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default BankInfo
