import {useState, useEffect} from "react"

const useFetch = (url)=>{
    //variable with the data
    const [data, setData] = useState([])

    //loading ... variable
    const [isPending, setIsPending] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw Error("could not fetch data")
                }
                return res.json()
            })
            .then (data=>{
                setData(data)
                setIsPending(false)
            })
            .catch(err => {
                console.log(err.message)
            })
        },1000)
        
    },[url])

    return  {data, isPending}
}
export default useFetch;