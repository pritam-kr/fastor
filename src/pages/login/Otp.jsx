
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Otp = () => {

    const [otp, setOtp] = useState("")
    const [message, setMessage] = useState("")
    

    const navigate = useNavigate()

    const otpHandler = async () => {


        try {
            const { data, status_code } = await axios.post('https://staging.fastor.in/v1/pwa/user/login', {
                phone: otp,
                dial_code: "+91",
                otp: "123456"
            })

            const extract = data
            const token = extract.data.refresh_token
            localStorage.setItem('token', token)

            if(token){

                navigate('/image')

            }

        } catch (error) {
            console.log(error)
        }


    }

    return (
        <div className="container">
            <div className="login-wrapper">
                <div className="login-form">
                    <input type="text" placeholder="Enter OTP" className='input' onChange={(event) => setOtp(event.target.value)} /> <button onClick={() => otpHandler()} className='btn btn-primary btn-otp-login'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Otp