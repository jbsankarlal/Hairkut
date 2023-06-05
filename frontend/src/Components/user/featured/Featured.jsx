import React from 'react'
import './Featured.css'
import useFetch from '../../../hooks/useFetch'
import { baseURL } from '../../../api/constants'

const Featured = () => {

    const { data, loading, error } = useFetch(`${baseURL}/saloons/countByService?services=Haircut,Facials,Bridal`)
    console.log(data);
    return (

        <div div className="featured" >
            {loading ? "Loading Please Wait" : <><div className="featuredItem">
                <img src="https://www.edubrain.in/image/Hair-styling.jpg" alt="" className="featuredImg" />
                <div className="featuredTile">
                    <h1 className="headName">Hair Cut</h1>
                    <h2 className="subName">{data[0]} spots</h2>
                </div>
            </div>

                <div className="featuredItem">
                    <img src="https://img.freepik.com/premium-photo/professional-stylist-modern-stylish-barbershop-shaves-cuts-young-man-s-hair-beauty-salon-hair-salon_180601-13979.jpg?w=2000" alt="" className="featuredImg" />
                    <div className="featuredTile">
                        <h1 className="headName">Facials</h1>
                        <h2 className="subName">{data[1]} spots</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src="https://wedbook.in/wp-content/uploads/2021/07/Bridal-makeup.jpg" alt="" className="featuredImg" />
                    <div className="featuredTile">
                        <h1 className="headName">Bridal Makeup</h1>
                        <h2 className="subName">{data[2]} spots</h2>
                    </div>
                </div></>}


        </div >

    )
}

export default Featured
