import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Image = () => {


    const [token] = useState(localStorage.getItem('token') || "")

    const [data, setData] = useState([])

   

    useEffect(() => {


        (async() => {

          try{
            const data = await axios.get('https://staging.fastor.in/v1/m/restaurant', {Headers: {
                Authorization: token
            }})

            console.log(data)
          }catch(error) {
            console.log(error)
          }

        })()
        


    }, [])


    return (
        <div className='container'>Image</div>
    )
}

export default Image