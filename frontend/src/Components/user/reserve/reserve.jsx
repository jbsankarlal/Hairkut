import React, { useContext, useState } from 'react'
import './reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../../hooks/useFetch'
import { SearchContext } from '../../../context/SearchContext'
import { getDate } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { baseURL } from '../../../api/constants'

const Reserve = ({ setOpen, saloonId, saloonName, saloonAddress, saloonDistance, totolCost }) => {
    const [selectedSlot, setSelectedSlot] = useState([])

    const { data, loading, error } = useFetch(`${baseURL}/saloons/slot/${saloonId}`)
    if (data) {
        console.log(data, "lllssssssssssssssssssssssssssssssssssss");
    } else {
        console.log(error, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    }
    const navigate = useNavigate()

    const details = useContext(SearchContext)
    const allDates = getDate(details.startdate)

    let totalCount = details.options.males + details.options.females + details.options.children

    const handleSelect = (e) => {
        if (selectedSlot.length === totalCount) {
            return;
        }
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedSlot(checked ? [...selectedSlot, value] : selectedSlot.filter((item) => item !== value))

    }

    const handleClick = () => {
        navigate("/saloons/payment", { state: { selectedSlot: selectedSlot, saloonName: saloonName, saloonAddress: saloonAddress, saloonDistance: saloonDistance, totolCost: totolCost } })
    }

    return (
        <div className='reserve'>
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select Your Slot</span>
                {data && data.map((item) => {
                    return (< div className="rItem">
                        <div className="rInfo">

                            <div className="rItemInfo">{item.slotNumber}
                                <input type="checkbox" className='checkbox' value={item._id} onChange={handleSelect} checked={selectedSlot.includes(item._id)}
                                    disabled={selectedSlot.length === totalCount}
                                /></div>
                            <div className="nameCode">{item.service}</div>
                            <div className="timeInfo">
                                {item.startTime} to {item.endTime}
                            </div>

                        </div>

                    </div>)
                })}
                <button onClick={handleClick} className="rButton">Book Now</button>
            </div>
        </div >
    )
}

export default Reserve
