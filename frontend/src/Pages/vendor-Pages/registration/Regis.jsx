import React from 'react'
import './Regis.css'
import Navbar from '../../../Components/vendor/navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../../api/constants'
import { toast } from 'react-toastify'

const Regis = () => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [place, setPlace] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [distance, setDistance] = useState();
    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Handle input changes and update state
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleType = (event) => {
        setType(event.target.value);
    };

    const handlePlace = (event) => {
        setPlace(event.target.value);
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    };
    const handleAddress = (event) => {
        setAddress(event.target.value);
    };

    const handleDistance = (event) => {
        setDistance(event.target.value);
    };

    const handlePhotos = (event) => {
        const selectedFiles = event.target.files;
        const fileArray = Array.from(selectedFiles);
        setPhotos(fileArray);
    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleMobile = (event) => {
        setMobile(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photos[0])

        // Create a new FormData object
        const formData = new FormData();

        // Append fields to the FormData object
        formData.append('name', name);
        formData.append('type', type);
        formData.append('place', place);
        formData.append('city', city);
        formData.append('address', address);
        formData.append('distance', distance);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('mobile', mobile);
        formData.append('email', email);
        formData.append('password', password);

        // Append photos to the FormData object
        // photos.forEach((photo, index) => {
        formData.append('photo', photos[0]);
        // });

        // Make a POST request to the server with the FormData
        axios.post(`${baseURL}/saloons`, formData)
            .then(() => {
                toast.success('Please Wait, Regitering..', {
                    position: "bottom-center",
                    autoClose: 6000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
                navigate('/vendor/bankinfo');

            })
            .catch((error) => {
                console.error(error);
            });
    };



    return (
        <div>
            <Navbar />

            <div className="regis">
                <div className="regisGlass">
                    <span className="regisContainer">
                        <h1>Please fill this form for Registration</h1>

                        <form onSubmit={handleSubmit}>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Full Name of your Enterprise:
                                    <input className='inputRegis' type="text" value={name} onChange={handleNameChange} />
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Choose the Type:
                                    <select className='inputRegis' value={type} onChange={handleType}>
                                        <option value="">Please choose an option</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                        <option value="unisex">Unisex</option>
                                    </select>
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Choose the place:
                                    <input className='inputRegis' type="string" value={place} onChange={handlePlace} />
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Choose the city:
                                    <input className='inputRegis' type="string" value={city} onChange={handleCity} />
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter your address:
                                    <input className='inputRegis' type="string" value={address} onChange={handleAddress} />
                                </label>
                            </span>


                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter Distance from neaby Landmark:
                                    <input className='inputRegis' type="string" value={distance} onChange={handleDistance} />
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Choose Photos:
                                    <input className='inputRegis' type="file" onChange={handlePhotos} />
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter a Title Name for your Services:
                                    <input className='inputRegis' type="string" value={title} onChange={handleTitle} />
                                </label>
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter a description for your Services:
                                    <input className='inputRegis' type="string" value={description} onChange={handleDescription} />
                                </label>
                            </span>


                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter your Mobile Number:
                                    <input className='inputRegis' type="text" value={mobile} onChange={handleMobile} />
                                </label >
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter your mail-id:
                                    <input className='inputRegis' type="email" value={email} onChange={handleEmail} />
                                </label >
                            </span>

                            <span className="textWrap">
                                <label className='labelRegis'>
                                    Enter a Password:
                                    <input className='inputRegis' type="password" value={password} onChange={handlePassword} />
                                </label >
                            </span>


                            <span className="buttons">
                                <button className='noButton' type="button">Cancel</button>
                                <button className='yesButton1' type="submit" onClick={() => handleSubmit}>Submit</button>
                            </span>
                        </form>
                    </span>
                </div>
            </div >
        </div >
    )
}

export default Regis
