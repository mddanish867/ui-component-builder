import { Code, Database, History } from "lucide-react";
import React from "react";

const features = [
  {
    id: 1,
    name: "Centralized Component Library",
    icon: <Database className="text-green-600 text-[32px]" />,
    description: `Organize all your react and next components in a centralizelibary. Easily browse, search, and access your saved components whenever you need them`,
  },
  {
    id: 2,
    name: "Reusable Components",
    icon: <Code className="text-green-600 text-[32px]" />,
    description: `Create and edit your React components directly within our intutive editor. Write JSX code with syntax highlighting and instant review`,
  },
  {
    id: 3,
    name: "Version Controll and History",
    icon: <History className="text-green-600 text-[32px]" />,
    description: `Track changes and maintain different versions of your components. Revert to previous versions if needed and keep a hostory of modifications.`,
  },
];

function Keyfeature() {
  return (
    <section className="feature-section py-12 bg-slate-50 mt-12">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-center">Key Features</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
              key={index}
            >
              <div className="w-20 h-20 rounded-full items-center justify-center flex bg-sky-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-green-600 mtt-6 text-center">
                {feature.name}
              </h3>
              <p className="text-slate-600 text-[13px] mt-2 text-current w-[80%]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Keyfeature;
