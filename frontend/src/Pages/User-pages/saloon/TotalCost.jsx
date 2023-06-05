import React, { useContext, useState } from 'react'
import './TotalCost.css'
import useFetch from '../../../hooks/useFetch'
import { SearchContext } from '../../../context/SearchContext'
import { baseURL } from '../../../api/constants'


const TotalCostt = ({ id, setTotolCost }) => {


    const { data, loading, error, reFetch } = useFetch(`${baseURL}/service/find?id=${id}&sname=haircut`)

    const details = useContext(SearchContext)
    const peopleCount = details?.options?.males + details?.options?.females + details?.options?.children
    const finalCost = data[0]?.price * peopleCount
    setTotolCost(finalCost)

    return (
        <>

            {data && <span className='saloonPprice'> ₹{finalCost}</span>}


        </>
    )
}

export default TotalCostt
