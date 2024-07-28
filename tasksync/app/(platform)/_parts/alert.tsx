"use client";
import React, { useEffect, useState } from "react";

type AlertProps = {
  message: string;
};

const Alert: React.FC<AlertProps> = ({ message }) => {
  const [alerts, setAlerts] = useState(true);

  const onClose = () => {
    setAlerts(false); // Hide the alert when the close button is clicked
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  if (!alerts) return null;

  return (
    <div
      role="alert"
      className="max-w-md mx-auto rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900 dark:text-white">
            Login Successful.
          </strong>

          <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
