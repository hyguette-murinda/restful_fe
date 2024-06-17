import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import loginIllustration from '../assets/sign.svg';
import { unauthenticatedApi } from '../api/api';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (event) => {
    event.preventDefault();

    const validationSchema = Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required")
    });

    try {
      await validationSchema.validate({ email, password });

      const user = { email, password };

      const response = await unauthenticatedApi.post(
        "http://localhost:5000/api/v1/auth/login",
        user,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log("response: " + response.data.token);

      if (response.data.data.token) {
        // Set the token in the headers
        const token = response.data.data.token;
        localStorage.setItem('token', token);
        console.log(token);

        // Navigate to the employee component after successful login
        navigate("/employee");
      } else {
        console.error("Invalid response from the server ");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Log more details about the error
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  return (
    <div className='bg-gray-100 h-screen flex items-center '>
      <div style={{ margin: "0 auto" }} className="bg-white w-[80%] h-[90%] rounded-lg flex">
        <div className=' h-full flex flex-col justify-center items-center w-[100%]'>
          <div className="">
            <h1 className='bold pb-4 text-[#65469b] font-bold text-2xl'>Login</h1>
          </div>
          <p className='text-sm'>Welcome back please enter your details</p>
          <form action="" className='p-8 w-full flex flex-col gap-y-3 max-w-[500px]' onSubmit={LoginUser}>
            <div className="flex flex-col text-sm">
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

            <div className="flex flex-col text-sm">
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
            <div className=" flex gap-3">
              <input
                type="checkbox"
                className='w-4'
              />
              <label className='text-[14px] pr-12'>Remember me</label>
              <a href="" className='text-[14px] text-[#65469b] font-semibold '>Forgot Password?</a>
            </div>

            <button type='submit' className='w-full bg-[#65469b] font-medium rounded-lg text-sm py-2.5 text-center text-white'>Login</button>
            <p className='text-sm p-2 pt-4'>Don't have an account?
              <Link to="/register" className="font-medium text-primary-600 hover:underline">Sign up</Link></p>
          </form>
        </div>
        <div className="w-full flex items-center justify-center">
          <img className='w-[100%]' src={loginIllustration} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
