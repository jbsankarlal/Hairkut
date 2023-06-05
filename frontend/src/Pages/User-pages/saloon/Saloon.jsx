import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import Navbar from '../../../Components/user/navbar/Navbar'
import Header from '../../../Components/user/header/Header'
import './Saloon.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Mail from '../../../Components/user/mail/Mail'
import Footer from '../../../Components/user/footer/Footer'
import useFetch from '../../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import ServiceList from './serviceList'
import TotalCost from './TotalCost'
import Reserve from '../../../Components/user/reserve/reserve'
import { AuthContext } from '../../../context/AuthContext'
import { baseURL } from '../../../api/constants'



const Saloon = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [openModal, setOpenModal] = useState(false)

    const { data, loading, error, reFetch } = useFetch(`${baseURL}/saloons/finds/${id}`)

    const details = useContext(SearchContext)
    const peopleCount = details?.options?.males + details?.options?.females + details?.options?.children
    const [totolCost, setTotolCost] = useState(0)


    const date = new Date();
    const option = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', option);
    console.log(formattedDate, "DATE");
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleClick = () => {
        if (user) {
            { setOpenModal(true) }
        } else {
            navigate("/login")
        }

    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            {loading ? ("Loading") : (< div className="saloonContainer">
                <div className="saloonWrapper">
                    <button onClick={handleClick} className="bookNow">Book your Slot Now</button>

                    <h1 className="saloonName">{data.name}</h1>
                    <div className="saloonAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{data.address}</span>
                    </div>
                    <span className='saloonDist'>{data.distance}</span>
                    <div className="saloonImgs">
                        {data.photos?.map(photo => (
                            <div div className="saloonImgWrapper" >
                                <img src={photo} className="SaloonImg" alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="saloonInfo">
                        <div className="saloonText">
                            <h1 className="saloonHead">{data.title}</h1>
                            <p className="saloonDesp">{data.description}</p>
                            <h1 className="saloonHead">Services Available</h1>
                            <ServiceList id={id} />
                        </div>
                        <div className="saloonPrice">
                            <h3 className='saloonPhead'>Your Total Booking Cost for {peopleCount} slots will be as follows</h3>
                            <h4 className='saloonPhead'>{formattedDate}</h4>
                            <h1><TotalCost id={id} setTotolCost={setTotolCost} /></h1>
                            <button className="bookSlot" onClick={handleClick}>Choose Your Slot</button>
                        </div>

                    </div>
                </div>

            </div>)}
            <Mail />
            <Footer />
            {openModal && <Reserve setOpen={setOpenModal} saloonId={id} saloonName={data.name} service={data.service} totolCost={totolCost} />}
        </div >
    )

}

export default Saloon
