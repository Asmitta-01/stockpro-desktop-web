import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PaymentData, UserInfo } from '../models/user-info.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async savePayment(paymentData: PaymentData): Promise<any> {
    const { data, error } = await this.supabase
      .from('payments')
      .insert([paymentData]);

    if (error) throw error;
    return data;
  }

  async updatePaymentStatus(paymentId: string, status: string, licenseKey?: string): Promise<any> {
    const updateData: any = { status };
    if (licenseKey) updateData.license_key = licenseKey;

    const { data, error } = await this.supabase
      .from('payments')
      .update(updateData)
      .eq('id', paymentId);

    if (error) throw error;
    return data;
  }

  async getPayment(paymentId: string): Promise<PaymentData | null> {
    const { data, error } = await this.supabase
      .from('payments')
      .select('*')
      .eq('id', paymentId)
      .single();

    if (error) return null;
    return data;
  }
}