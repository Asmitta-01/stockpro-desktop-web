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
}