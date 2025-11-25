export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
}

export interface PaymentData {
  id: string;
  userId: string;
  userInfo: UserInfo;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  licenseKey?: string;
  createdAt: Date;
  // Optional fields to map payments to plans and providers
  planName?: string;
  currency?: string;
  provider?: string;
  providerReference?: string;
  metadata?: any;
  receiptUrl?: string;
  ipAddress?: string;
  updatedAt?: Date;
}