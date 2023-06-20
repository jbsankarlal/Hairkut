import React, { useContext, useState } from 'react'
import './ServiceTab.css'
import { AdminAuthContext } from '../../../context/AdminAuthContext'
import axios from 'axios'
import { baseURL } from '../../../api/constants'
import { toast } from 'react-toastify'


const ServiceTab = () => {
    const [services, setServices] = useState([])

    const { user } = useContext(AdminAuthContext)
    axios.get(`${baseURL}/service/get-services?id=${user._id}`).then((res) => {
        setServices(res.data)
    })

    const handleDelete = (id) => {
        axios.delete(`${baseURL}/service/${id}`).then((res) => {
            toast.success('SERVICE DELETED', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SLNo.</th>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Gender</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {services.length && services.map((service, index) => (
                        <tr key={service.id}>
                            <td>{index + 1}</td>
                            <td>{service.servicename}</td>
                            <td>{service.price}</td>
                            <td>{service.gender}</td>
                            <td><button className='cancel' onClick={() => handleDelete(service._id)}>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ServiceTab
