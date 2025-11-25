import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { SoftwareScreenshots } from "../../components/software-screenshots/software-screenshots";
import { SupabaseService } from '../../services/supabase-service';
import { UserInfo, PaymentData } from '../../models/user-info.interface';
import { PlanService } from '../../services/plan.service';
import { PricingPlan } from '../../models/pricing-plan.model';

@Component({
  selector: 'app-download-page',
  imports: [CommonModule, FormsModule, Navbar, SubpageHeader, SoftwareScreenshots],
  templateUrl: './download-page.html',
  styleUrl: './download-page.css',
})
export class DownloadPage implements OnInit {
  showLicensePurchase = false;
  currentStep: 'form' | 'success' = 'form';
  userInfo: UserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  };
  licenseKey = '';
  paymentId = '';
  selectedPlan?: PricingPlan;

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const licenseParam = params['license'];
      if (licenseParam) {
        this.showLicensePurchase = true;
        this.selectedPlan = this.planService.getPlanByName(licenseParam) || this.planService.getFreePlan();
      }
      if (params['payment']) {
        this.paymentId = params['payment'];
        this.onPaymentSuccess();
      }
    });
  }

  async onSubmitForm() {
    if (!this.userInfo.firstName || !this.userInfo.lastName || !this.userInfo.email) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.paymentId = this.generateId();
    const amount = this.selectedPlan?.price ?? 25000;
    const paymentData: PaymentData = {
      id: this.paymentId,
      userId: this.generateId(),
      userInfo: this.userInfo,
      amount: amount,
      status: 'pending',
      createdAt: new Date()
    };

    try {
      await this.supabaseService.savePayment(paymentData);
      this.redirectToNotchPay();
    } catch (error) {
      console.log(error);
      alert('Erreur lors de l\'enregistrement. Veuillez réessayer.');
    }
  }

  redirectToNotchPay() {
    const notchPayUrl = `https://api.notchpay.co/payments/initialize`;
    const paymentData = {
      amount: this.selectedPlan?.price ?? 25000,
      currency: this.selectedPlan?.currency ?? 'XAF',
      email: this.userInfo.email,
      reference: this.paymentId,
      callback: `${window.location.origin}/download?payment=${this.paymentId}`
    };

    window.location.href = `${notchPayUrl}?${new URLSearchParams(paymentData as any).toString()}`;
  }

  async onPaymentSuccess() {
    this.licenseKey = this.generateLicenseKey();
    await this.supabaseService.updatePaymentStatus(this.paymentId, 'completed', this.licenseKey);
    this.currentStep = 'success';
  }

  downloadLicenseKey() {
    const content = `StockPro Desktop License Key\n\nNom: ${this.userInfo.firstName} ${this.userInfo.lastName}\nEmail: ${this.userInfo.email}\nClé de licence: ${this.licenseKey}\n\nInstructions:\n1. Ouvrez StockPro Desktop\n2. Allez dans Aide > Activer la licence\n3. Saisissez votre clé de licence\n4. Cliquez sur Activer`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'StockPro-License.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private generateLicenseKey(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 20; i++) {
      if (i > 0 && i % 4 === 0) result += '-';
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
