"use client";
import { useProjectDataContext } from "@/app/DataContextAPI";
import { Project } from "@/app/utils/Data";
import { TextToIcon } from "@/app/utils/TextToIcon";
import { Plus } from "lucide-react";
import React from "react";
import Skeleton from "@mui/material/Skeleton/Skeleton";

function AllProjects() {
  const {
    allProjectsObject: { allProjects },
    isLoadingObject: { isLoading },
  } = useProjectDataContext();
  return (
    <div className="bg-white w-full p-8 rounded-lg mt-4">
      <span className="text-lg flex flex-col sm:flex-row gap-2 justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-lg">All Projects</span>
          <span className="text-[14px] text-green-600 cursor-pointer">
            More
          </span>
        </div>
        {!isLoading && allProjects.length > 0 && (
          <button className="bg-green-600 flex text-white text-[13px] px-4 py-[2px] rounded-md items-center mt-2 sm:mt-0 mx-4">
            <Plus fontSize="small" />
            <span className="text-[13px]">New Project</span>
          </button>
        )}
      </span>

      {isLoading && (
        <div className="flex flex-col gap-3 justify-center items-center w-full mt-16">
          <Skeleton
            variant="rectangular"
            width={805}
            height={60}
            className="mb-2 text-slate-200"
          />
          <Skeleton
            variant="rectangular"
            width={805}
            height={60}
            className="mb-2 text-slate-200"
          />
        </div>
      )}

      {!isLoading && allProjects.length === 0 ? (
        <EmptyProjectPlaceholder />
      ) : (
        <div className="flex flex-wrap gap-4 mt-7 mb-2 max-sm:grid max-sm:grid-cols-1">
          {allProjects.map((project, index) => (
            <div key={index}>
              <SingleProject singleProject={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  function SingleProject({ singleProject }: { singleProject: Project }) {
    return (
      <div className="w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full">
        <div className="w-[70px] h-[70px] bg-green-100 rounded-full flex items-center justify-center">
          {TextToIcon({ text: singleProject.icon, size: "medium" })}
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-lg cursor-pointer hover:text-green-600 select-none">
            {singleProject.name}
          </span>
          <span className="text-[12px] text-slate-400 text-center">
            {singleProject.components.length} Component
          </span>
        </div>
      </div>
    );
  }
}

export default AllProjects;

export function EmptyProjectPlaceholder() {
  return (
    <div className="p-1 gap-5 flex flex-col justify-center h-[200px] mt-[68px] mb-[34px] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        color="gray"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-shield-plus"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
      </svg>
      <div className="">
        <h3 className=" font-semibold text-[15px] mb-1 text-center">
          {"There are no new projects yet..."}
        </h3>
        <p className="text-gray-400 w-52 text-center text-[13px]">
          Please click below to add your first project.
        </p>
      </div>
      <button className="bg-green-600 p-2 rounded-md text-white text-center text-[12px px-7]">
        Add New Project
      </button>
    </div>
  );
}
