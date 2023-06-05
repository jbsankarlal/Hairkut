import React from 'react'
import "./Popular.css"
import useFetch from '../../../hooks/useFetch'
import { baseURL } from '../../../api/constants'


const Popular = () => {

    const { data, loading, error } = useFetch(`${baseURL}/saloons?limit=6`)
    console.log("hellooo");
    return (
        <div className='popular'>
            {loading ? ("Loading") : (<>
                {data.map((item) => (<div div className="popularItem">
                    <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fsb258ZW58MHx8MHx8&w=1000&q=80" alt="" className="popularImg" />
                    <div className="popularTitles">
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
