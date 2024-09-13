import { useProjectDataContext } from "@/app/DataContextAPI";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { ChartBarStacked, FolderHeart, GitFork } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface StatisticCard {
  id: number;
  name: string;
  icon: ReactNode;
  count: number;
}
function Statsbar() {
  const [statisticsCard, SetStatisticsCard] = useState<StatisticCard[]>([
    {
      id: 1,
      name: "Project Created",
      icon: <GitFork className="text-green-600" />,
      count: 3,
    },
    {
      id: 2,
      name: "Components Added",
      icon: <ChartBarStacked className="text-green-600" />,
      count: 3,
    },
    {
      id: 1,
      name: "Favorit components",
      icon: <FolderHeart className="text-green-600" />,
      count: 3,
    },
  ]);
  return (
    <div className="mt-4 flex flex-col gap-1">
      <div className="grid grid-cols-3 gap-4 rounded-lg mt-2">
        {statisticsCard.map((card, index) => (
          <div key={index}>
            <CategoriesCard singleCard={card} />
          </div>
        ))}
      </div>
    </div>
  );

  function CategoriesCard({ singleCard }: { singleCard: StatisticCard }) {
    const {
      isLoadingObject: { isLoading },
    } = useProjectDataContext();
    return (
      <div className="flex gap-4 items-center p-4 bg-white rounded-lg cursor-pointer">
        <div className="w-[45px] h-[45px] bg-green-100 rounded-lg flex items-center justify-center max-md:hidden">
          {singleCard.icon}
        </div>
        <div className="flex flex-col max-sm:justify-center">
          {isLoading ? (
            <div>
              <Skeleton
                variant="rectangular"
                width={105}
                height={15}
                className="mb-2"
              />
              <Skeleton
                variant="rectangular"
                width={105}
                height={20}
                className="mb-2"
              />
            </div>
          ) : (
            <div className="flex flex-col max-sm:justify-center">
              <span className="font-bold text-2xl max-sm:text-center">
                {singleCard.count}
              </span>
              <span className="text-sm font-light text-slate-400 max-sm:text-[11px]">
                {singleCard.name}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Statsbar;
