import { Link } from 'react-router-dom';
import './SearchItem.css'
import React from 'react'

const SearchItem = ({ item }) => {
    console.log("arrived");
    return (

        < div className='searchResult' >
            < div className='searchItem' >
                <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8&w=1000&q=80" alt="" className="siImg" />
                <div className="siDetails">
                    <h1 className="siTitle">{item.name}</h1>
                    <span className="siLocation">{item.address}</span>
                    <span className="siServices">Hair Cutting, Bridal Makeups</span>
                    <span className="siSpeciality">{item.address}</span>
                    <span className="siCancel">Cancellation Available</span>
                </div>
                <div className="siOffers">
                    {item.rating && < div className="siRating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>}

                    <div className="siDetailText">
                        <span className="siPrice">₹160</span>
                        <span className="siTax">Incuding GST & SGST</span>
                        <Link to={`/saloons/${item._id}`}>
                            <button className="siCheck">Check Availability</button>
                        </Link>
                    </div>
                </div>
            </ div>


        </div >

    )
}

export default SearchItem
