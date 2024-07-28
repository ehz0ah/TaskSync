import React from "react";
import { Feature } from "./types";

interface FeatureListProps {
  features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="p-4 sm:px-6">
      <p className="text-md font-medium text-white sm:text-lg">
        What is included:
      </p>

      <ul className="mt-1 space-y-1 sm:mt-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-4 ${
                feature.included ? "text-indigo-700" : "text-red-700"
              }`}
            >
              {feature.included ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
            <span className="text-sm text-white">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
