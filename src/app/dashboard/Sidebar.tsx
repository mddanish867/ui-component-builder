import {
  Code,
  Heart,
  House,
  LogOut,
  ArrowLeft,
  TableOfContents,
} from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <div className="h-screen w-[320px] p-6 pt-12 relative">
      <RoundedArroricon />
      <Logo />
      <Links />
      <LogoutButton/>
    </div>
  );

  function RoundedArroricon() {
    return (
      <div className=" w-7 h-7 z-40 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center">
        <div className="bg-violet-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer">
          <ArrowLeft 
            fontSize="small"
            className="text-white text-[12px]"
          />
        </div>
      </div>
    );
  }

  function Logo() {
    return (
      <div className="flex gap-2 items-center">
        <div
          className={`bg-violet-500 w-10 h-10 flex items-center justify-center p-[6px] rounded-md`}
        >
          <Code className="text-white text-[22px]" />
        </div>

        <div className="flex gap-1 text-[22px]">
          <span className={`font-bold text-violet-500`}>UI</span>
          <span className={`font-bold text-slate-600`}>Code</span>
        </div>
      </div>
    );
  }

  function Links() {
    return (
      <div className="mt-44 ml-3 flex flex-col gap-2 text-[15px]">
        <div className="p-[7px] hover:text-violet-500 select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%] bg-violet-500 text-white">
          <House />
          <span className="mt-0.5">Home</span>
        </div>
        <div className="p-[7px] hover:text-violet-500 select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-slate-400">
          <TableOfContents />
          <span className="mt-0.5">Categories</span>
        </div>
        <div className="p-[7px] hover:text-violet-500 select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-slate-400">
          <Heart />
          <span className="mt-0.5">Favorites</span>
        </div>
      </div>
    );
  }

  function LogoutButton() {
    return (
      <div className="p-[7px] hover:text-violet-500 select-none cursor-pointer ml-3 lg:mt-36 mt-64 text-[15px] rounded-lg flex items-center gap-2 w-[75%] text-slate-400">
        <LogOut />
        <span className="mt-0.5">Logout</span>
      </div>
    );
  }
}

export default Sidebar;
