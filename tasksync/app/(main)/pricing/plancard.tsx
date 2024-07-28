import React from "react";
import PlanDetails from "./plandetails";
import FeatureList from "./featurelist";
import { Plan } from "./types";

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const { title, description, price, features } = plan;

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
      <PlanDetails title={title} description={description} price={price} />
      <FeatureList features={features} />
    </div>
  );
};

export default PlanCard;
