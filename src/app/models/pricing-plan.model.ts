export interface PricingPlan {
    id: number;
    name: string;
    description?: string;
    price: number;
    currency?: string;
    benefits: string[];
    isFree?: boolean;
}
