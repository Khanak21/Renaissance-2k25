"use client"
import React, { useState } from 'react'
import Register from './Register'
import OtpVerify from './OtpVerify'
const AuthPage = () => {
const [page,setPage]=useState(1);
const [data,setData]=useState({
  "username": "",
  "password": "",
  "student_from": "mnnit",
  "Gender": "",
  "email": "",
  "tel": ""
})

  return (
    <div>
      {page===1&&<Register data={data} setData={setData} setPage={setPage} />}
      {page===2&&<OtpVerify setPage={setPage} />}
    </div>
  )
}

export default AuthPage