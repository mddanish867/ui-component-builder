'use client';  // Ensure this is at the top of your component file

import { Code } from "lucide-react";
import Link from "next/link";
import React, { useState, } from 'react';

function Navbar() {
  const [user, setUser] = useState(false);
 const handleLogin = () =>{
  setUser(true)
 }



 
  return (
    <div className="flex m-5 max-sm:mt-10 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );

  function Logo() {
    return (
      <div className="flex gap-2 items-center">
        <div className={`bg-violet-500 flex items-center justify-center p-[6px] rounded-md`}>
          <div className="w-[26px h-[26px] items-center justify-center flex">
            <Code className="text-white text-[22px]" />
          </div>
        </div>
        <div className="flex gap-1 text-[22px]">
          <span className={`font-bold text-violet-500`}>UI</span>
          <span className={`font-bold text-slate-600`}>Code</span>
        </div>
      </div>
    );
  }

  function Buttons() {
    return (
      <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
        {user ? (
          // Render UserProfileComponent if user is authenticated
          <Link href="/dashboard"  >
              <button
                className="max-sm:w-full text-sm border border-violet-500 text-white bg-violet-500 p-[8px] px-6 rounded-md"
              >
                Dashboard
              </button>
            </Link>
        ) : (
          // Render Sign In and Sign Up buttons if user is not authenticated
          <>
            <Link href=""  onClick={handleLogin}>
              <button
                className="max-sm:w-full text-sm border border-violet-500 text-white bg-violet-500 p-[8px] px-6 rounded-md"
              >
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button
                className="max-sm:w-full text-sm border border-violet-500 hover:bg-violet-500 hover:text-white p-[8px] px-6 rounded-md"
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    );
  }
}

export default Navbar;
