import { useProjectDataContext } from "@/app/DataContextAPI";
import { Component } from "@/app/utils/Data";
import { formatDate } from "@/app/utils/FormateDate";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Circles } from "react-loader-spinner";

function FavoriteComponent() {
  const {
    allFavoritComponentObject: { allFavoritComponents },
    isLoadingObject: { isLoading },
  } = useProjectDataContext();

  return (
    <div className="bg-white w-full p-8 rounded-lg mt-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg">Favorits Component</span>
        <button className="bg-green-600 flex gap-2 items-center text-white text-[12px] p-2 px-3 rounded-md">
          <Eye fontSize="small" />
          <span className="max-sm:hidden">View All</span>
        </button>
      </div>
      <div className="grid grid-cols-4 mt-6 mb-4 text-sm items-center text-slate-400 px-4 max-sm:grid-cols-2">
        <span className="">Component</span>
        <span className="max-sm:hidden">Created At</span>
        <span className="max-sm:hidden">Project</span>
        <span className="">Actions</span>
      </div>

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

      {!isLoading && allFavoritComponents.length === 0 ? (
        <div className="flex justify-center items-center mt-[70px] mb-8 text-slate-400 text-sm">
          No favorits component set yet...
        </div>
      ) : (
        <div className="px-4 flex flex-col gap-1 mt-1">
          {allFavoritComponents.map((component, index) => (
            <div key={index}>
              <SingleFavoritsComponents component={component} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
  function SingleFavoritsComponents({ component }: { component: Component }) {
    return (
      <div className="grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2">
        <span className="hover:text-green-600 cursor-pointer">
          {component.name}
        </span>
        <span className="max-sm:hidden">{formatDate(component.createdAt)}</span>

        <span className="justify-self-start max-sm:hidden">
          <span className="inline-block rounded-2xl bg-green-600 text-white text[12px] px-4 py-1 whitespace-nowrap">
            {component.projectName}
          </span>
        </span>

        <div className="flex flex-gap-4">
          <div className="text-green-600 rounded-full w-7 h-7 items-center justify-center  cursor-pointer">
            <Pencil fontSize="samll" className="text-[13px]" />
          </div>
          <div className="text-green-600 rounded-full w-7 h-7 items-center justify-center  cursor-pointer mx-2">
            <Trash2 fontSize="samll" className="text-[13px]" />
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteComponent;
