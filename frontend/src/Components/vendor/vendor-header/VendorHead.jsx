import React from 'react'
import './VendorHead.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDharmachakra, faCalendarDays, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const VendorHead = ({ type }) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [startdate, setStartdate] = useState(new Date())
    const [openOptions, setopenOptions] = useState(false)
    const [options, setOptions] = useState({
        males: 1,
        females: 0,
        children: 0
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {

            return {

                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1

            }
        })
    }

    const navigate = useNavigate()

    const handleSearch = () => {

        navigate("/saloons", { state: { destination, startdate, options } })
    }

    return (
        <div className='headers'>
            {type !== "list" && <>
                <h1 className="mainHeadings" >Welcome dear Clients !!</h1>
            </>}
            <div className={type === "list" ? "headerContainers listMode" : "headerContainers"}>

                <div className="headerLists">
                    <h1>Do you want to be part of this?</h1>

                </div>
                <div className="headerSearchs">
                    <button className='nooButton'>No</button>
                    <button className='yessButton' onClick={() => navigate('/vendor/registration')}>Yes</button>
                </div>
            </div>
        </div >
    )
}

export default VendorHead
