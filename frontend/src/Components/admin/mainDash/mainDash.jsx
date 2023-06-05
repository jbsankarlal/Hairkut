import React from 'react'
import './mainDash.css'
import Cards from '../cards/Cards'
import Table from '../tables/Table'

const mainDash = () => {
    return (
        <div className="MainDash">
            <h1 className='dashhead'>Dashboard</h1>
            <Cards />
            <Table />
        </div >
    )
}

export default mainDash
