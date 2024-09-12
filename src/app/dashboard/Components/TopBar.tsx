"use client";
import { useSidebarContext } from "@/app/SidebarContext";
import { Menu, Search, X } from "lucide-react";
import React, { useEffect, useRef, } from "react";

function TopBar() {
  return (
    <div className="bg-white w-full p-[11px] rounded-lg px-6 flex justify-between items-center">
      <DashBoardText />
      <SearchBar />
      <div className="flex gap-4 items-center">
        <DarkMode />
        <ProfileAccount />
      </div>
    </div>
  );

  function DashBoardText() {
    const {
      showSideBarObject: { showSideBar, setShowSideBar },
      isMobileViewObject: { isMobileView },
    } = useSidebarContext();
  
    const toggleSidebar = () => {
      if (isMobileView) {
        setShowSideBar(!showSideBar); // Toggle the sidebar visibility for mobile view
      }
    };
  
    return (
      <div className="flex flex-col">
        {/* Menu icon for mobile screens */}
        <div onClick={toggleSidebar} className="hidden max-sm:block">
          <Menu className="text-slate-500 cursor-pointer" />
        </div>
        <div className="flex flex-col max-sm:hidden">
          <span className="font-semibold">Welcome back, Danish</span>
          <span className="text-slate-400 text-[11px] font-light">
            We are happy to see you again
          </span>
        </div>
      </div>
    );
  }
  
  

  function SearchBar() {
    const {
      showSearchBarObject: { showSearchBar, setShowSearchBar },
    } = useSidebarContext();

    const searchBarRef = useRef<HTMLDivElement>(null);
    function handleClickedSearchBar() {
      if (!showSearchBar) {
        setShowSearchBar(true);
      }
    }

    // out side of searchbar

    useEffect(() => {
      function handleClickOutSide(event: MouseEvent) {
        if (
          searchBarRef.current &&
          !searchBarRef.current.contains(event.target as Node)
        ) {
          setShowSearchBar(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutSide);
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
    }, [setShowSearchBar]);
    return (
      <div
        ref={searchBarRef}
        onClick={handleClickedSearchBar}
        className={`${
          !showSearchBar && "cursor-pointer"
        } bg-slate-100 w-1/3 hover:bg-slate-200 transition-all p-[8px] flex gap-1 justify-center items-center rounded-md`}
      >
        {showSearchBar ? <InputSearchBar /> : <SearchBarIconText />}
      </div>
    );

    function InputSearchBar() {
      const {
        showSearchBarObject: { setShowSearchBar },
      } = useSidebarContext();
      const inputRef = useRef<HTMLInputElement>(null);

      useEffect(() => {
        inputRef.current?.focus();
      }, []);

      const handleCloseclick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowSearchBar(false);
      };

      return (
        <div className="px-2 flex justify-between items-center w-full bg-transparent">
          <input
            ref={inputRef}
            placeholder="Search a component..."
            className="w-full outline-none bg-transparent text-[13px] placeholder:text-slate-400"
          />
          <X
            fontSize="small"
            className="text-slate-400 text-[10px] cursor-pointer"
            onClick={handleCloseclick}
          />
        </div>
      );
    }
    function SearchBarIconText() {
      return (
        <div className=" flex gap-1 items-center">
          <Search fontSize="small" className="text-slate-500" />
          <span className="text-slate-500 text-sm">Search</span>
        </div>
      );
    }
  }

  
  function DarkModeMenu() {
    const {
      openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
      darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
    } = useSidebarContext();

    // out side of menu to close dropdown
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function handleClickOutSide(event: MouseEvent) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setOpenDarkModeMenu(false);
        }
      }

      if (openDarkModeMenu) {
        document.addEventListener("mousedown", handleClickOutSide);
      } else {
        document.removeEventListener("mousedown", handleClickOutSide);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutSide);
      };
    }, [openDarkModeMenu, setOpenDarkModeMenu]);

    function changeSelection(menuItems: any) {
      setDarkModeMenu((prevMenuItems) =>
        prevMenuItems.map((prevMenuItem) =>
          prevMenuItem.id === menuItems.id
            ? { ...prevMenuItem, isSelected: true }
            : { ...prevMenuItem, isSelected: false }
        )
      );
    }
    return (
      <div
      ref={menuRef}
        className={`${
          openDarkModeMenu ? "absolute" : "hidden"
        } p-3 border border-slate-50 select-none pr-10 bg-white rounded-md right-[3px] top-8 flex flex-col py-4 gap-[18px] shadow-md`}
      >
        {darkModeMenu.map((item) => (
          <div
            onClick={() => changeSelection(item)}
            key={item.id}
            className="flex gap-2 items-center cursor-pointer hover:text-green-500"
          >
            {item.icon}
            <span className="text-[12px] font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    );
  }

    
  function DarkMode() {
    const {
      openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
      darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
    } = useSidebarContext();

    function handledarkMode() {
      setOpenDarkModeMenu(!openDarkModeMenu);
    }
    return (
      <div onClick={handledarkMode} className="relative cursor-pointer">
        <div className="text-green-600">
          {darkModeMenu[0].isSelected && darkModeMenu[0].icon}
          {darkModeMenu[1].isSelected && darkModeMenu[1].icon}
        </div>
        <DarkModeMenu />
      </div>
    );
  }

  function ProfileAccount() {
    return (
      <div className="flex gap-3 items-center">
        <div className="w-[36px] h-[37px] bg-slate-100 rounded-full"></div>
      </div>
    );
  }
}

export default TopBar;
