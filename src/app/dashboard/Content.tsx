"use client";
import React from "react";
import TopBar from "./Components/TopBar";
import { useSidebarContext } from "@/app/SidebarContext";
import Statsbar from "./Components/Statsbar";
import AllProjects from "./Components/AllProjects";
import FavoriteComponent from "./Components/FavoriteComponent";

function Content() {
  const {
    showSideBarObject: { showSideBar },
    isMobileViewObject: { isMobileView },
  } = useSidebarContext();

  return (
    <div className="w-full h-screen bg-slate-50 p-5">
      <TopBar />
      <Statsbar/>
      <AllProjects/>
      <FavoriteComponent/>
      {isMobileView && showSideBar && <SoftLayer />}
    </div>
  );
}

export default Content;

function SoftLayer() {
  return (
    <div className="w-full h-full fixed top-0 right-0 bg-black opacity-30">
      
    </div>
  );
}
