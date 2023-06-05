import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { baseURL } from '../../../api/constants';

const ServiceList = ({ id }) => {
    console.log(id, "kedkkuma");

    const { data, loading, error, reFetch } = useFetch(`${baseURL}/service/find/${id}`)
    console.log(data, "ser kitti");
    return (
        <div>
            <ul>

                <h2 className='saloonHead'>{data && data.map(item => (
                    <li key={item._id}> {item.servicename}{console.log(item, "item")}</li>
                ))}</h2>


            </ul>
        </div >
    )
}

export default ServiceList
