import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../redux/features/AuthSlice';

const SignUpPage = () => {
  
  const [email , setEmail] = useState("");
  const[password , setPassword] = useState("")
    
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = ()=>{
    if(!email && !password){
         alert("Please fill all fields");
         return;
    }
    const userData = {email , password};
    dispatch(signUp(userData));
    navigate("/login")
  }
  return (
    <div>
        <h3>SignUp</h3>
        <input type="email" placeholder='enter e-mail' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSignUp}>Signup</button>
        <p>
            already have a account <Link to='/login'>Login</Link>
        </p>
    </div>
  )
}

export default SignUpPage