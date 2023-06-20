import React, { useContext, useEffect } from 'react'
import './Header.css'
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
import { SearchContext } from '../../../context/SearchContext';
import { Alert, Button } from 'react-bootstrap';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-algolia-places';
import AlgoliaPlaces from 'react-algolia-places';


const searchClient = algoliasearch('IIK4M1GVPH', 'cdd10857905160ea27e89b42ca3b9603');



const Header = ({ type }) => {
    const [destination, setDestination] = useState("ernakulam")
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [destinationError, setDestinationError] = useState('');
    const [openDate, setOpenDate] = useState(false)
    const [startdate, setStartdate] = useState(new Date());
    const [openOptions, setopenOptions] = useState(false)
    const [options, setOptions] = useState({
        males: 1,
        females: 1,
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
    const details = useContext(SearchContext)

    useEffect(() => {
        setDestination("")
        setStartdate(new Date())
        setOptions({
            males: 1,
            females: 0,
            children: 0
        })

    }, []);


    const { dispatch, } = useContext(SearchContext)

    const handleSearch = () => {
        if (!destination || destination.trim() === '') {
            setDestinationError('Please enter the place name');
            setShowError(true);
            return;
        }

        setDestinationError('');

        dispatch({ type: "NEW_SEARCH", payload: { destination, startdate, options } })
        navigate("/saloons", { state: { destination, startdate, options } })

    }


    const [activeItem, setActiveItem] = useState("Hair Cut");

    const handleClick = (item) => {
        setActiveItem(item);
    };

    const headerList = [
        "Hair Cut", "Beard & Moustache", "Facials", "Bridal Makeup", "Mehendi", "Spa"
    ]

    return (

        < div className='header' >
            {type !== "list" && <>
                <h1 className="mainHeading" >Welcome to the New Era of Styling !!</h1>
            </>
            }
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    {headerList.map((item) => (
                        <div
                            key={item}
                            className={`headerList-item ${activeItem === item ? "active" : ""}`}
                            onClick={() => handleClick(item)}
                        >
                            <FontAwesomeIcon icon={faDharmachakra} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <p className='danger'>{destinationError}</p>


                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faDharmachakra} className='headerIcon' />
                        <input type="text" placeholder='Ener the Place Name' value={destination} className='headerSearchInput'
                            onChange={(e) => {
                                setDestinationError('');
                                return setDestination(e.target.value)
                            }}
                        />
                    </div>


                    <label htmlFor="datePicker">
                        <div className="headerSearchItem">
                            <div className="headerSearchTextContainer" onClick={() => setOpenDate(!openDate)}>
                                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' title="Select start date" />
                                <span className='headerSearchText' >{startdate.toDateString()}</span>
                            </div>
                            {openDate && <DatePicker id="datePicker" selected={startdate} onChange={(date) => setStartdate(date)} minDate={new Date()} />}
                        </div>
                    </label>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon className='headerIcon' icon={faPerson} />
                        <span onClick={() => setopenOptions(!openOptions)} className='headerSearchText'>{`${options.males} males . ${options.females} females . ${options.children} children`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className='optionText'>Male</span>
                                <div className="optionCounter">
                                    <button disabled={options.males <= 0} className="optionCount" onClick={() => handleOption("males", "d")}>-</button>
                                    <span className="optionCounterValue">{options.males}</span>
                                    <button disabled={options.males >= 2 || options.females >= 2 || options.children >= 2 || (options.females >= 1 && options.children >= 1) || (options.males >= 1 && options.females >= 1) || (options.males >= 1 && options.children >= 1)} className="optionCount" onClick={() => handleOption("males", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className='optionText'>Female</span>
                                <div className="optionCounter">
                                    <button disabled={options.females <= 0} className="optionCount" onClick={() => handleOption("females", "d")}>-</button>
                                    <span className="optionCounterValue">{options.females}</span>
                                    <button disabled={options.females >= 2 || options.children >= 2 || options.males >= 2 || (options.children >= 1 && options.males >= 1) || (options.males >= 1 && options.females >= 1) || (options.children >= 1 && options.females >= 1)} className="optionCount" onClick={() => handleOption("females", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className='optionText'>Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCount" onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterValue">{options.children}</span>
                                    <button disabled={options.children >= 2 || options.females >= 2 || options.males >= 2 || (options.females >= 1 && options.males >= 1) || (options.children >= 1 && options.males >= 1) || (options.children >= 1 && options.females >= 1)} className="optionCount" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>




                    <div className="headerSearchItem">

                        <button className="headerButton" onClick={() => handleSearch()}><FontAwesomeIcon icon={faSearch} className='headerSearchIcon' />Search</button>
                    </div>
                </div>




            </div>
        </div >
    )
}

export default Header
