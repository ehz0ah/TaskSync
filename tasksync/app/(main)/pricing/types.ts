export interface Feature {
  text: string;
  included: boolean;
}

export interface Plan {
  title: string;
  description: string;
  price: {
    amount: string;
  };
  features: Feature[];
}
