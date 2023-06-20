import React from 'react'
import './Home.css'
import Navbar from '../../../Components/user/navbar/Navbar'
import Header from '../../../Components/user/header/Header'
import Featured from '../../../Components/user/featured/Featured'
import Popular from '../../../Components/user/popular/Popular'
import Mail from '../../../Components/user/mail/Mail'
import Footer from '../../../Components/user/footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Popular Services</h1>
                <Featured />
                <h1 className="homeTitle">Browse by Place</h1>
                <Popular />
                <Mail />
                <Footer />
            </div>
        </ >
    )
}

export default Home
