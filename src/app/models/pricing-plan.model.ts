export interface PricingPlan {
    id: number;
    name: string;
    description?: string;
    price: number;
    type: 'standard' | 'free' | 'professional';
    currency?: string;
    benefits: string[];
    isFree?: boolean;
}
