import React, { useState } from "react";
import loginIllustration from '../assets/signup2.svg'
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import axios from "axios";

const SignUpForm = () =>{
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        const validationSchema = Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required")
          });
       
        try {
        await validationSchema.validate({ email, password, fullname });
          const user = {
            fullname: fullname,
            email:email,
            password:password,
            
          };
    
          const response = await axios.post("http://localhost:5000/api/v1/user/register", user);
          console.log(response.data);
             navigate("/");
    
        } catch (err) {
          console.error("Error creating user", err);
        }
      };
    return(
        <div className='bg-gray-100 h-screen flex items-center '>
        <div style={{margin:"0 auto"}} className="bg-white w-[80%] h-[90%] rounded-lg flex">
            <div className='max-w-96  h-full flex flex-col justify-center items-center '>
                <div className="pr-8">
                <h1 className='bold pb-4  text-[#101540] font-bold text-2xl'>Sign up</h1>
                <p className='text-sm'>Welcome back please enter your details</p>
                </div>
                <form action="" className=' p-8' onSubmit={handleSubmit}>
                    <div className="flex flex-col text-sm p-4">
                        <label htmlFor="fullNames"> full names*</label>
                        <input type="text" name="fullNames" placeholder="Enter names" value={fullname}
                        className="p-2.5 w-full border border-gray-300 rounded-md bg-gray-100" onChange={(e) => setFullname(e.target.value)} />
                    </div>
                    <div className="flex flex-col text-sm p-4">
                        <label htmlFor="email">Email*</label>
                    <input 
                    value={email}
                    type="text"
                    name='email' 
                    placeholder='Enter your email'
                    className='p-2.5 w-full border border-gray-300 rounded-md bg-gray-100'
                    onChange={(e) => setEmail(e.target.value)}
                    /> 
                    </div>
                  
                   <div className="flex flex-col text-sm p-4">
                        <label htmlFor="password">Password*</label>
                    <input 
                    value={password}
                    type="password"
                    name='password' 
                    placeholder='Minimum 8 characters'
                    className='p-2.5 border w-full border-gray-300 rounded-md bg-gray-100'
                    onChange={(e) => setPassword(e.target.value)}
                    /> 
                   </div>
                   <div className="pt-2.5 flex p-4  justify-between ">
                    <input 
                    type="checkbox"
                    className='w-4'
    
                     ></input>
                   <label className='text-[14px] pr-12' >I agree to all terms and conditions</label> 
                   </div>
    
                <button className='w-80 ml-2  bg-[#0B1355] font-medium rounded-lg text-sm   py-2.5 text-center text-white'>Register</button>
                <p className='text-sm p-2 pt-4'>Don't have an account? 
                <Link to="/" className="font-medium text-primary-600 hover:underline">login</Link></p>
                </form>
            </div>
            <div className=" w-full  flex items-center justify-center ">
            <img className=' w-[80%]' src={loginIllustration} alt="Login Illustration" />
            </div>
        </div>
      </div>
    )
} 

export default SignUpForm