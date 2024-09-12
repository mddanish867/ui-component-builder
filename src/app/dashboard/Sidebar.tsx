"use client";
import { Code, LogOut, ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useSidebarContext } from "../SidebarContext";

function Sidebar() {
  const {
    openSideBar,
    showSideBarObject: { showSideBar },
    isMobileViewObject: { isMobileView },
  } = useSidebarContext();

  return (
    <div
      className={`h-screen ${openSideBar ? "w-[320px] p-6" : "w-[100px] p-4"} pt-12 relative transition-all duration-300 
        ${isMobileView && !showSideBar ? "hidden" : ""}`} // Hide sidebar on mobile when `showSideBar` is false
    >
      <RoundedArroricon />
      <Logo />
      <Links />
      <LogoutButton />
    </div>
  );

  function RoundedArroricon() {
    const { openSideBar, setOpenSideBar } = useSidebarContext();

    function handleToggle() {
      setOpenSideBar(!openSideBar);
    }

    return (
      <div
        onClick={handleToggle}
        className=" w-7 h-7 z-40 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center cursor-pointer"
      >
        <div className="bg-green-600 rounded-full w-[70%] h-[70%] flex items-center justify-center">
          {openSideBar ? (
            <ArrowLeft fontSize="small" className="text-white text-[12px]" />
          ) : (
            <ArrowRight fontSize="small" className="text-white text-[12px]" />
          )}
        </div>
      </div>
    );
  }

  function Logo() {
    const { openSideBar } = useSidebarContext();

    return (
      <div className="flex gap-2 items-center">
        <div className="bg-green-600 w-10 h-10 flex items-center justify-center p-[6px] rounded-md">
          <Code className="text-white text-[22px]" />
        </div>

        {openSideBar && (
          <div className="flex gap-1 text-[22px]">
            <span className="font-bold text-green-600">UI</span>
            <span className="font-bold text-slate-600">Code</span>
          </div>
        )}
      </div>
    );
  }

  function Links() {
    const { menuItems, setMenuItems, openSideBar } = useSidebarContext();

    function handleLinkClick(id: string) {
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, isSelected: true }
            : { ...item, isSelected: false }
        )
      );
    }

    return (
      <div className="mt-44 ml-3 flex flex-col gap-2 text-[15px]">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleLinkClick(item.id)}
            className={`${
              item.isSelected
                ? "bg-green-600 text-white"
                : "text-slate-400 hover:text-green-600"
            } p-[7px] select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%]`}
          >
            {item.icon}
            {openSideBar && <span className="mt-0.5">{item.name}</span>}
          </div>
        ))}
      </div>
    );
  }

  function LogoutButton() {
    const { openSideBar } = useSidebarContext();
    return (
      <div
        className={`p-[7px] hover:text-green-600 select-none cursor-pointer ${
          openSideBar ? "ml-3" : "ml-0"
        } lg:mt-36 mt-64 text-[15px] rounded-lg flex items-center gap-2 w-[75%] text-slate-400`}
      >
        <LogOut />
        {openSideBar && <span className="mt-0.5">Logout</span>}
      </div>
    );
  }
}

export default Sidebar;
