import axios from 'axios'
import React, { useState } from 'react'
import { login_url } from './Url/Url'
import {useNavigate,Link} from "react-router-dom"
const Login = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const Login_data=async()=>{
        await axios.post(login_url,{
            email,
            password
        }).then((res)=>{
            if(res.data.message === "login success"){
                navigate("/view")
            }
            else {
                alert("not valid");
              }
            
        })
    }
  return (
   <>
<div>
    <form>
        <label>E-Mail:</label>
        <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <label>Password:</label>
        <input type='text' onChange={(e)=>setPassword(e.target.value)}/>
    </form>
    <button onClick={Login_data}>Login</button>
    <Link to="/App">Forgot password</Link>
</div>
   </>
  )
}

export default Login