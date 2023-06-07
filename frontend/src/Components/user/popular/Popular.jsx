import React from 'react'
import "./Popular.css"
import useFetch from '../../../hooks/useFetch'
import { baseURL } from '../../../api/constants'
import { useNavigate } from 'react-router-dom'


const Popular = () => {
    const navigate = useNavigate()

    const { data, loading, error } = useFetch(`${baseURL}/saloons?limit=6`)
    console.log("hellooo");
    const handleFeatured = (id) => {
        navigate(`saloons/${id}`);
    }
    return (
        <div className='popular'>
            {loading ? ("Loading") : (<>
                {data.map((item) => (<div div className="popularItem" onClick={() => handleFeatured(item._id)}>
                    <img src={item.photos} alt="" className="popularImg" />
                    <div className="popularTitles" >
                        <h1 className="popularHead">{item.name}</h1>
                        <h2 className="popularSub">{item.city}</h2>
                        <h3 className="addressSpan">{item.address}</h3>
                        <span className="distanceSpan">{item.distance}</span>
                    </div>
                </div>))}



            </>)}

        </div>
    )
}

export default Popular
