import React, { useContext } from 'react'
import './Payment.css'
import Navbar from '../../../Components/user/navbar/Navbar'
import { SearchContext } from '../../../context/SearchContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { baseURL } from '../../../api/constants'
import { AuthContext } from '../../../context/AuthContext'


const Payment = () => {

    const { user } = useContext(AuthContext)
    const location = useLocation();
    const { selectedSlot, saloonName, saloonAddress, saloonDistance, totolCost } = location.state;
    const details = useContext(SearchContext)

    const peopleCount = details?.options?.males + details?.options?.females + details?.options?.children
    const priceForStripe = totolCost * 100;
    const [slotDetails, setSlotDetails] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchSlotDetails = async () => {
            try {
                const response = await fetch(`${baseURL}/slots/details/${selectedSlot}`);
                if (response.ok) {
                    const data = await response.json();
                    setSlotDetails(data);
                } else {
                    throw new Error('Failed to fetch slot details');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchSlotDetails();
    }, [selectedSlot]);
    const payNow = async token => {
        try {
            const response = await axios({
                url: `${baseURL}/users/payment`,
                method: 'post',
                data: {
                    name: user.username,
                    gender: user.gender,
                    mobile: user.mobile,
                    email: user.email,
                    date: details.startdate.toDateString(),
                    saloon: saloonName,
                    saloonAddress: saloonAddress,
                    saloonDistance: saloonDistance,
                    count: peopleCount,
                    slotDetails: slotDetails,
                    amount: totolCost * 100,
                    token
                }

            })
            if (response.status === 200) {
                console.log("success");
                navigate("/success")
            } else {
                console.log("failed");
                navigate(-1)
            }
        } catch (error) {

        }
    }

    console.log(slotDetails, "Slot details**");

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className='paymentScreen'>
            <Navbar />

            <div className="userpay">
                <div className="userpayGlass">

                    <div className="userpayContainer">
                        <h2 className='orderHead' style={{ color: "#588970" }}>Order Summary</h2>
                        <h3 className='oTotal'>Saloon name :{saloonName}</h3>
                        <h3 className='oTotal'>Service : Haircut</h3>
                        <h3 className='oTotal'>Service date : {details.startdate.toDateString()}</h3>
                        <h3 className='oTotal'>Total No. of People : {peopleCount}</h3>
                        {slotDetails.length > 0 && (
                            <div>
                                <h3 className='oSlots'>
                                    {slotDetails.map((slot) => slot.slotNumber).join(', ')}
                                </h3>
                                <h3 className='oTimings'>
                                    {slotDetails.map((slot) => `${slot.startTime} to ${slot.endTime}`).join(', ')}
                                </h3>
                            </div>
                        )}

                        <span className='oTotal'>Total Amount  :</span>
                        <span className='oPrice'>₹ {totolCost}</span>
                        <div className='oButtons'>

                            <button className="cancel" onClick={handleCancel}>Cancel</button>
                            <StripeCheckout
                                className="confirm"
                                stripeKey='pk_test_51NDTerSJJAEETXBPXDHQEtFykG1hPZfldpdwtUFi7JW4ywrXdTO4VhFFCv1ctKSeDWEvRQuVmP2G4SBeQIj7uyAj00sdHz6tNP'
                                label='Pay Now'
                                name='Pay With Credit Card'
                                billingAddress='test address'
                                shippingAddress='test addresss'
                                amount={priceForStripe}
                                description={`Your total is ₹${totolCost}`}
                                token={payNow}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payment
