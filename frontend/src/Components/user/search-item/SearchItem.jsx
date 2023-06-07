import { Link } from 'react-router-dom';
import './SearchItem.css'
import React from 'react'

const SearchItem = ({ item }) => {
    console.log("arrived", item);
    return (

        < div className='searchResult' >
            < div className='searchItem' >
                <img src={item.photos} alt="" className="siImg" />
                <div className="siDetails">
                    <h1 className="siTitle">{item.name}</h1>
                    <span className="siLocation">{item.address}</span>
                    <span className="siServices">Hair Cutting</span>
                    <span className="siSpeciality">{item.distance}</span>
                    <span className="siCancel">COD not available</span>
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
