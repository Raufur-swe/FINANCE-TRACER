import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/features/AuthSlice';

const Login = () => {

    const [email, setemail] = useState("");
    const [password,  setpassword] = useState("");

    const dispatch = useDispatch()
    const nevigate = useNavigate()

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem("persist:root")) // persist is saving data use in store.js

        if (savedUser) {
            const parsedAuth = JSON.parse(savedUser.auth);
            if (
                parsedAuth.user.email === email &&
                parsedAuth.user.password === password
            ){
                dispatch(login(parsedAuth.user));
                nevigate("/")
            }else{
                alert("Invalid credentials")
            }
    } else {
        alert("No user found, please signup");
        }
    }


    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder='Email' onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder='pass......' onChange={(e) => setpassword(e.target.value)} />
            <button onClick={handleLogin} >Login</button>
            <p>dont have an account??click Hare : <Link to="/signup" >Signup</Link></p>
        </div>
    )
}

export default Login