import { v4 as uuidv4 } from "uuid";

export interface Component {
  _id: string;
  name: string;
  projectName: string;
  code: string;
  isFavorits: boolean;
  createdAt: string;
}

export interface Project {
  _id: string;
  userId: string;
  name: string;
  icon: string;
  createdAt: string;
  components: Component[];
}

export const allProjectsData: Project[] = [
  {
    _id: uuidv4(),
    userId: "",
    name: "Forms",
    icon: "ChartBarStacked",
    createdAt: "2022-01-01T00:00:00.000Z",
    components: [
      {
        _id: uuidv4(),
        name: "Form 1",
        projectName: "Forms",
        code: "",
        isFavorits: false,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Form 2",
        projectName: "Forms",
        code: "",
        isFavorits: true,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Form 3",
        projectName: "Forms",
        code: "",
        isFavorits: true,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
    ],
  },
  {
    _id: uuidv4(),
    userId: "",
    name: "Buttons",
    icon: "RectangleHorizontal",
    createdAt: "2022-01-01T00:00:00.000Z",
    components: [
      {
        _id: uuidv4(),
        name: "Button 1",
        projectName: "Buttons",
        code: "",
        isFavorits: false,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: uuidv4(),
        name: "Button 2",
        projectName: "Buttons",
        code: "",
        isFavorits: true,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
    ],
  },
];
