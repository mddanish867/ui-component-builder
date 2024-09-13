"use client";

import { FolderKanban, Heart, House, Moon, Sun } from "lucide-react";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the MenuItem type
interface MenuItem {
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

interface DarkModeMenu {
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

// Define the SidebarContext type
interface SidebarContextType {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>; // Correct type for setState

  // dark mode handle
  darkModeMenuObject: {
    darkModeMenu: DarkModeMenu[];
    setDarkModeMenu: React.Dispatch<React.SetStateAction<DarkModeMenu[]>>;
  };

  openDarkModeMenuObject: {
    openDarkModeMenu: boolean;
    setOpenDarkModeMenu: (open: boolean) => void;
  };

  showSearchBarObject: {
    showSearchBar: boolean;
    setShowSearchBar: (open: boolean) => void;
  };

  isMobileViewObject: {
    isMobileView: boolean;
    setIsMobileView: (open: boolean) => void;
  };

  showSideBarObject: {
    showSideBar: boolean;
    setShowSideBar: (open: boolean) => void;
  };
}

// Default state for the context
const defaultState: SidebarContextType = {
  openSideBar: true,
  setOpenSideBar: () => {},

  menuItems: [],
  setMenuItems: () => {},

  openDarkModeMenuObject: {
    openDarkModeMenu: false,
    setOpenDarkModeMenu: () => {},
  },

  darkModeMenuObject: {
    darkModeMenu: [],
    setDarkModeMenu: () => {},
  },

  // searchbar
  showSearchBarObject: {
    showSearchBar: false,
    setShowSearchBar: () => {},
  },

  // Mobile

  isMobileViewObject: {
    isMobileView: false,
    setIsMobileView: () => {},
  },
  // show side bar
  showSideBarObject: {
    showSideBar: false,
    setShowSideBar: () => {},
  },
};

// Create SidebarContext
const SidebarContext = createContext<SidebarContextType>(defaultState);

// SidebarProvider component
export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: "1", name: "Home", icon: <House size={20} />, isSelected: true },
    {
      id: "2",
      name: "Projects",
      icon: <FolderKanban size={20} />,
      isSelected: false,
    },
    {
      id: "3",
      name: "Favorites",
      icon: <Heart size={20} />,
      isSelected: false,
    },
  ]);

  const [openSideBar, setOpenSideBar] = useState(() => {
    const storedValue = localStorage.getItem("openSideBar");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  const [showSearchBar, setShowSearchBar] = useState(() => {
    const storedValue = localStorage.getItem("openSearchBar");
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });
  // dark mode
  const [openDarkModeMenu, setOpenDarkModeMenu] = useState(false);
  const [darkModeMenu, setDarkModeMenu] = useState<DarkModeMenu[]>(() => {
    // try to get the darkMode stt fromlocal storage
    const saveDarkMode = localStorage.getItem("isDarkMode");
    const isDarkMode = saveDarkMode ? JSON.parse(saveDarkMode) : false;

    return [
      {
        id: "1",
        name: "Light",
        icon: <Sun fontSize="small" className="text-green-600" />,
        isSelected: true,
      },
      {
        id: "2",
        name: "Dark",
        icon: <Moon fontSize="small" className="text-green-600" />,
        isSelected: false,
      },
    ];
  });

  // Mobile responsive
  // Mobile responsive
const [isMobileView, setIsMobileView] = useState(false);
const [showSideBar, setShowSideBar] = useState(false);

useEffect(() => {
  function handleResize() {
    setIsMobileView(window.innerWidth <= 768); // Adjust for tablets or large mobile devices
    setShowSideBar(window.innerWidth > 768); // Show sidebar by default on larger screens
  }
  handleResize(); // Initial check
  window.addEventListener("resize", handleResize); // Update on window resize

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  // Update the local storage whenever hide SiddeBar change
  useEffect(() => {
    localStorage.setItem("openSideBar", JSON.stringify(openSideBar));
  }, [openSideBar]);

  useEffect(() => {
    // Save dark mode state to localStorage whenever it change
    const isDarkMode = darkModeMenu[1].isSelected;
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [darkModeMenu]);

  // Show search save into lopcalStorage
  // Update the local storage whenever hide SiddeBar change
  useEffect(() => {
    localStorage.setItem("openSearchBar", JSON.stringify(showSearchBar));
  }, [showSearchBar]);

  return (
    <SidebarContext.Provider
      value={{
        openSideBar,
        setOpenSideBar,
        menuItems,
        setMenuItems,
        openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
        darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
        showSearchBarObject: { showSearchBar, setShowSearchBar },
        isMobileViewObject: { isMobileView, setIsMobileView },
        showSideBarObject: { showSideBar, setShowSideBar },
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebarContext = () => useContext(SidebarContext);
