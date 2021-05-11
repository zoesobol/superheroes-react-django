import {useState, useEffect} from 'react';

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const abortConst = new AbortController();
        fetch(url, {signal:abortConst.signal, mode:"cors"})
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error("something bad!")
                }
                return res.json()
            })
            .then((data)=>{
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch((err)=>{
                if (err.name === "AbortError"){
                    console.log("error fetch aborted")
                } else{
                    setError(err.message)
                    setIsPending(false)
                }
            })
        //cleanup useEffect
        return ()=> abortConst.abort();
    }, [url])

    return {data, isPending, error}
}

export default useFetch