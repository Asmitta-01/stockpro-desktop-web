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
    // Map camelCase PaymentData to snake_case DB columns
    const row: any = {
      id: paymentData.id,
      user_id: paymentData.userId || null,
      user_info: paymentData.userInfo,
      plan_name: paymentData.planName || null,
      amount: paymentData.amount,
      currency: paymentData.currency || 'XAF',
      status: paymentData.status,
      provider: paymentData.provider || null,
      provider_reference: paymentData.providerReference || null,
      license_key: paymentData.licenseKey || null,
      metadata: paymentData.metadata || null,
      receipt_url: paymentData.receiptUrl || null,
      ip_address: paymentData.ipAddress || null,
      created_at: paymentData.createdAt || new Date(),
      updated_at: paymentData.updatedAt || new Date()
    };

    const { data, error } = await this.supabase
      .from('payments')
      .insert([row]);

    if (error) throw error;
    return data;
  }

  async updatePaymentStatus(paymentId: string, status: string, providerReference?: string, licenseKey?: string): Promise<any> {
    const updateData: any = { status: status, updated_at: new Date() };
    if (licenseKey) updateData.license_key = licenseKey;
    if (providerReference) updateData.provider_reference = providerReference;

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

    // Map DB snake_case to camelCase PaymentData
    const row: any = data;
    const result: PaymentData = {
      id: row.id,
      userId: row.user_id,
      userInfo: row.user_info,
      amount: Number(row.amount),
      status: row.status,
      licenseKey: row.license_key || undefined,
      createdAt: row.created_at ? new Date(row.created_at) : new Date(),
      planName: row.plan_name || undefined,
      currency: row.currency || undefined,
      provider: row.provider || undefined,
      providerReference: row.provider_reference || undefined,
      metadata: row.metadata || undefined,
      receiptUrl: row.receipt_url || undefined,
      ipAddress: row.ip_address || undefined,
      updatedAt: row.updated_at ? new Date(row.updated_at) : undefined
    };

    return result;
  }

  async generateLicenseKey(email: string, type: string): Promise<string> {
    const { data, error } = await this.supabase.functions.invoke('generate-license', {
      body: { email: email, type: type },
    })

    if (error) throw error;
    return data.license;
  }
}