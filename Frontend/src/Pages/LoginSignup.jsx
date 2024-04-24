import React from 'react';
import { useState } from "react"
import './css/loginsignup.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

export const LoginSignup = () => {
  const [firstName, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <form>
          <div className="loginsignup-fields">
            <input type="text" onChange={(e)=>{
              setFirstName(e.target.value);
            }} name="name" placeholder="Your Name" required/>
            <input type="email" onChange={(e)=>{
              setUsername(e.target.value);
            }} placeholder="Email Address" required/>
            <input type="password" onChange={(e)=>{
              setPassword(e.target.value);
            }} placeholder="Password" required/>
          </div>
          <button onClick={async()=>{
            const response = await axios.post("http://localhost:3000/api/v1/Signup", {
              firstName,
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/");

          }}>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>
          <Link style={{textDecoration:'none'}} to='/Signin'>
          Login
          </Link></span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing i agree the terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
};
