export interface Discount {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  isActive: boolean;
  isGlobal: boolean;
  startDate: Date;
  endDate: Date;
  usageLimit?: number;
  usedCount: number;
  createdAt: Date;
}

export interface DiscountValidation {
  isValid: boolean;
  discount?: Discount;
  message: string;
}