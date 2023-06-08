import React, { useState } from 'react'
import './List.css'
import Navbar from '../../../Components/user/navbar/Navbar'
import Header from '../../../Components/user/header/Header'
import { useLocation, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../../Components/user/search-item/SearchItem'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import useFetch from '../../../hooks/useFetch'
import { baseURL } from '../../../api/constants'
import { BarLoader, SyncLoader } from 'react-spinners'
import Pagination from '../../../Components/admin/pagination/Pagination';

const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state?.destination || '')
    const [startdate, setStartdate] = useState(location.state.startdate)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    const [saloons, setSaloons] = useState([]);
    const [pageNo, setPageNo] = useState(1)

    const { data, loading, error, reFetch } = useFetch(`${baseURL}/saloons/find?destination=${destination}&page=${pageNo}&limit=8`)

    const handleClick = () => {
        reFetch();
    }


    return (
        <div>
            <Navbar />
            {/* <Header type="list" /> */}
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        < h1 className="searchTitle">Search</h1>
                        <div className="lsItem">
                            <label className='listLabel' htmlFor="">Destination</label>
                            <input placeholder={destination} onChange={(e) => setDestination(e.target.value)} type="text" />
                        </div>

                        <div className="lsItem">
                            <label className='listLabel' htmlFor="">Check in date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{startdate.toDateString()}</span>
                            {openDate && <DatePicker
                                selected={startdate}
                                onChange={(date) => setStartdate(date)}
                                minDate={new Date()}
                            />}
                        </div>

                        <div className="lsItem">
                            <label className='listLabel' htmlFor="">Options</label>
                            <div className="optionItems">
                                <span>Males</span>
                                <input type="number" min={0} placeholder={options.males} className="optionValue" />
                            </div>

                            <div className="optionItems">
                                <span>Females</span>
                                <input type="number" min={0} placeholder={options.females} className="optionValue" />
                            </div>

                            <div className="optionItems">
                                <span>Children</span>
                                <input type="number" min={0} placeholder={options.children} className="optionValue" />
                            </div>

                            <button onClick={handleClick} className="optionSearch">SEARCH</button>

                        </div>
                    </div>
                    <div className="listResult">

                        {loading ? <SyncLoader /> : <>
                            {console.log(data, "kerooooo")}
                            {data && data.map(item => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                        </>}
                        <div className='page'><Pagination currentPag={pageNo} onPageChange={setPageNo} length={saloons.length} /></div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default List
