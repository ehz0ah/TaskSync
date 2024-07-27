import React from 'react';

interface PlanDetailsProps {
  title: string;
  description: string;
  price: {
    amount: string;
  };
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ title, description, price }) => {
  return (
    <div className="p-4 sm:px-6">
      <h2 className="text-md font-medium text-white">
        {title}
        <span className="sr-only">Plan</span>
      </h2>

      <p className="mt-1 text-sm text-white">
        {description}
      </p>

      <p className="mt-1 sm:mt-2">
        <strong className="text-2xl font-bold text-white sm:text-3xl">
          {price.amount} 
        </strong>
        <span className="text-xs font-medium text-white">/month</span>
      </p>

      <a
        className="mt-2 block rounded border border-indigo-600 bg-indigo-600 px-8 py-2 text-center text-xs font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-4"
        href="/login"
      >
        Get Started
      </a>
    </div>
  );
};

export default PlanDetails;
