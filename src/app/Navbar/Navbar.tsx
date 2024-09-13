'use client';  // Ensure this is at the top of your component file

import { Code } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';

function Navbar() {
  const [user, setUser] = useState(false);
  const handleLogin = () => {
    setUser(true);
  };

  return (
    <div className="flex justify-between mx-8 my-5 max-sm:mt-10 max-sm:flex-row">
      <Logo />      
      <Buttons />
    </div>
  );

  function Logo() {
    return (
      <div className="flex gap-2 items-center max-sm:mb-4">
        <div className="bg-green-600 flex items-center justify-center p-[6px] rounded-md">
          <div className="w-[26px] h-[26px] flex items-center justify-center">
            <Code className="text-white text-[22px]" />
          </div>
        </div>
        <div className=" gap-1 text-[22px] hidden lg:flex">
          <span className="font-bold text-green-600">UI</span>
          <span className="font-bold text-slate-600">Code</span>
        </div>
      </div>
    );
  }

  function Buttons() {
    return (
      <div className="flex gap-2 max-sm:flex-row max-sm:w-full max-sm:-mt-4 max-sm:items-center max-sm:mx-7">
        {user ? (
          // Render UserProfileComponent if user is authenticated
          <Link href="/dashboard">
            <button className="max-sm:w-32 max-sm:mx-24 text-sm border border-green-600 text-white bg-green-600 p-[8px] px-6 rounded-md">
              Dashboard
            </button>
          </Link>
        ) : (
          // Render Sign In and Sign Up buttons if user is not authenticated
          <>
            <Link href="" onClick={handleLogin}>
              <button className="max-sm:w-full text-sm border border-green-600 text-white bg-green-600 p-[8px] px-6 rounded-md">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="max-sm:w-full text-sm border border-green-600 text-green-600 hover:bg-green-600 hover:text-white p-[8px] px-6 rounded-md">
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
