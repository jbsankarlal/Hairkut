import axios from 'axios'
const { useState, useEffect } = require("react")

const useFetch = (url)=>{
    console.log(url,"urlhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(()=>{
    const fetchData = async()=>{
    setLoading(true)

    try {
        const res =await axios.get(url)
        console.log(res,"fetchdata");
        setData(res.data)
    } catch (err) {
        setError(err)
    }
    setLoading(false)
}
fetchData()
    },[url])


const reFetch = async()=>{
    setLoading(true)

    try {
        const res = await axios.get(url)
        console.log(res,"reFetch");
        setData(res.data)
    } catch (err) {
        setError(err)
    }
    setLoading(false)
}

return {data, loading, error, reFetch}

}


export default useFetch;