import React from "react";
import PlanCard from "./plancard";
import { Plan } from "./types";

const plans: Plan[] = [
  {
    title: "Starter",
    description:
      "Basic real-time collaboration for individuals, small teams or start-ups. Includes core features, limited users, and basic support.",
    price: { amount: "$20" },
    features: [
      { text: "10 users", included: true },
      { text: "2GB of storage", included: true },
      { text: "Email support", included: true },
      { text: "Help center access", included: false },
      { text: "Phone support", included: false },
      { text: "Community access", included: false },
    ],
  },
  {
    title: "Pro",
    description:
      "Advanced collaboration tools for growing businesses. More users, enhanced features, priority support, and increased storage.",
    price: { amount: "$30" },
    features: [
      { text: "20 users", included: true },
      { text: "5GB of storage", included: true },
      { text: "Email support", included: true },
      { text: "Help center access", included: true },
      { text: "Phone support", included: false },
      { text: "Community access", included: false },
    ],
  },
  {
    title: "Enterprise",
    description:
      "Customizable solution for large organizations. Even more users, full feature set, dedicated support, advanced security, and integration options.",
    price: { amount: "$100" },
    features: [
      { text: "50 users", included: true },
      { text: "20GB of storage", included: true },
      { text: "Email support", included: true },
      { text: "Help center access", included: true },
      { text: "Phone support", included: true },
      { text: "Community access", included: true },
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="max-w-screen-xl px-2 py-4 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-4">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
