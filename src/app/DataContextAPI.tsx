"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { allProjectsData, Component, Project } from "./utils/Data";

interface AppContextType {
  allProjectsObject: {
    allProjects: Project[];
    setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  };

  isLoadingObject: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };

  allFavoritComponentObject: {
    allFavoritComponents: Component[];
    setAllFavoritComponents: React.Dispatch<React.SetStateAction<Component[]>>;
  };
}

// default state
const defaultState: AppContextType = {
  allProjectsObject: {
    allProjects: [],
    setAllProjects: () => {},
  },
  isLoadingObject: {
    isLoading: true,
    setIsLoading: () => {},
  },
  allFavoritComponentObject: {
    allFavoritComponents: [],
    setAllFavoritComponents: () => {},
  },
};
// Create SidebarContext
const ProjectDataContext = createContext<AppContextType>(defaultState);

// SidebarProvider component
export const ProjectDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [allFavoritComponents, setAllFavoritComponents] = useState<Component[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  // fetch data
  useEffect(() => {
    function fetchAllProjects() {
      setTimeout(() => {
        setAllProjects(allProjectsData);
        setIsLoading(false);
      }, 2000);
    }
    fetchAllProjects();
  }, []);

  // favorits component
  useEffect(() => {
    if (allProjects.length > 0) {
      const favoriteComponents = allProjects.flatMap((project) =>
        project.components.filter((component) => component.isFavorits)
      );
      setAllFavoritComponents(favoriteComponents);
    }
  }, [allProjects]);

  return (
    <ProjectDataContext.Provider
      value={{
        allProjectsObject: { allProjects, setAllProjects },
        isLoadingObject: { isLoading, setIsLoading },
        allFavoritComponentObject: {
          allFavoritComponents,
          setAllFavoritComponents,
        },
      }}
    >
      {children}
    </ProjectDataContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useProjectDataContext = () => useContext(ProjectDataContext);
