import React, { useState } from 'react';
import { FaRegBell } from "react-icons/fa";
import axios from 'axios';
import { throttle } from '../utils';


const NavBar = ({ onSearch }) => {
  const [showSignOut, setShowSignOut] = useState(false);

  const signOut = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page
    window.location.href = '/login';
  };
  return <div  className='border z-10 border-slate-100 flex sticky top-0 bg-white items-center justify-between'>
    <div className=" ml-9">
      <form class="max-w-md mx-auto ">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative w-[900px]">
          <input onChange={(e) => throttle(onSearch(e.target.value), 200)}
            type="search" id="default-search" className="block text-black w-full p-3 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-600 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Employees, More..." required />
          <button type="submit" class="text-gray-500 absolute end-1.5 bottom-1.5    font-medium rounded-lg text-sm px-4 py-2  dark:hover:text-gray-900 dark:focus:ring-gray-800">Search</button>
        </div>
      </form>
    </div>

    <div className="flex items-center mr-8">
      <FaRegBell />
      <div onClick={() => setShowSignOut(!showSignOut)} class="relative w-10 h-10 m-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </div>
      {showSignOut && (
        <button
          className="absolute top-10 right-0 m-6 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded"
          onClick={signOut}
        >
          Sign out
        </button>
      )}
    </div>
  </div>;
};
export default NavBar;