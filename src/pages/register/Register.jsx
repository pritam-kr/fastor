import axios from 'axios'
import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"

const Register = () => {

    const [mobileNumber, setMobileNumber] = useState({ number: "" })
    const [message, setMessage] = useState("")


    const navigate = useNavigate()

    const submitHandler = async () => {

        

        try {
            const { data } = await axios.post('https://staging.fastor.in/v1/pwa/user/register', {
                phone: mobileNumber.number,
                dial_code: "+91"
            })
 
          
                setMessage(data)
                navigate(`/otp/${mobileNumber.number}`)

        } catch (error) {
            console.log(error)
        }



    }

    return (
        <div className="container">
            <div className="login-wrapper">
                <div className="login-form">
                    <input
                        className="input"

                        type="text"
                        placeholder="Enter Mobile Number"
                        onChange={(event) => setMobileNumber((prev) => ({ ...prev, number: event.target.value }))}
                    />{" "}
                    <button
                        className="btn btn-primary btnSubmit"
                        onClick={() => submitHandler()}
                    >
                        {" "}
                        Generate OTP{" "}
                    </button>{" "}
                    <p className='text-md'>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Register