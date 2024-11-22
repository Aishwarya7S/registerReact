import React , { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { FaUser,  FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { NavLink , useNavigate} from 'react-router-dom'

const Register = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate(); 

    const handleRegister = (event) =>{
        event.preventDefault();
        console.log("username:"+username)
        console.log("email:"+email)
        console.log("password:"+password)

        axios.post("http://localhost:3000/api/createuser",{username,email,password})
        .then((res)=>{
            if(res){
                alert("Saved Successfully")
                setUsername("");
                setEmail("");
                setPassword("");
                navigate('/login')
            }else{
                alert("Failed to save")
            }
        })
    }
  return (
    <div className="wrapper">
        <form action=''>
            <h1>Register</h1>
            <div className="input-box">
               <input type='text' placeholder='Username' value={username}  onChange={(e) => setUsername(e.target.value)} required/><FaUser  className='icon'/>
            </div>
            <div className="input-box">
               <input type='email' placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)} required/><MdEmail className='icon' />
            </div>
            <div className="input-box">
               <input type='password' placeholder='Password' value={password}  onChange={(e) => setPassword(e.target.value)} required/><FaLock className='icon' />
            </div>
            <button type='submit' onClick={handleRegister}>Register</button> 
            <div className='link'>
               <p>Already have an account?<NavLink to='/login'>Login</NavLink></p>
            </div>       
        </form>
    </div>
  )
}

export default Register
