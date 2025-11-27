import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { SoftwareScreenshots } from "../../components/software-screenshots/software-screenshots";
import { SupabaseService } from '../../services/supabase-service';
import { UserInfo, PaymentData } from '../../models/user-info.interface';
import { PlanService } from '../../services/plan.service';
import { PricingPlan } from '../../models/pricing-plan.model';
import { NotchpayClient } from 'notchpay-client';
import { environment } from '../../../environments/environment.development';
import { SoftwareDownload } from "../../components/software-download/software-download";

@Component({
  selector: 'app-download-page',
  imports: [CommonModule, FormsModule, Navbar, SubpageHeader, SoftwareScreenshots, SoftwareDownload],
  templateUrl: './download-page.html',
  styleUrl: './download-page.css',
})
export class DownloadPage implements OnInit {
  showLicensePurchase = false;
  currentStep!: 'form' | 'success' | 'failure';
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

  downloadLink = 'https://github.com/Asmitta-01/stockpro-desktop/releases/download/1.6.1.10/StockPro-Setup.exe';
  isSavingData = signal(false);
  isLoadingLicense = signal(false);

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private planService: PlanService
  ) { }

  ngOnInit() {
    this.currentStep = 'form';
    this.route.queryParams.subscribe(params => {
      const licenseParam = params['license'];
      if (licenseParam) {
        this.showLicensePurchase = true;
        this.selectedPlan = this.planService.getPlanByName(licenseParam) || this.planService.getFreePlan();
      }
      const paymentParam = params['payment'];
      if (paymentParam) {
        this.showLicensePurchase = true;
        const paymentStatus = params['status'];
        if (paymentStatus === 'complete') {
          this.currentStep = 'success';
          this.isLoadingLicense.set(true);
          this.paymentId = paymentParam;
          this.onPaymentSuccess(params);
        } else {
          this.currentStep = 'failure';
          const providerReference = params['reference'];
          this.supabaseService.updatePaymentStatus(this.paymentId, 'failed', providerReference);
        }
      }
    });
  }

  async onSubmitForm() {
    if (!this.userInfo.firstName || !this.userInfo.lastName || !this.userInfo.email) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    this.isSavingData.set(true);

    this.paymentId = this.generateId();
    const amount = this.selectedPlan?.price ?? 25000;
    const paymentData: PaymentData = {
      id: this.paymentId,
      userId: this.userInfo.email,
      userInfo: this.userInfo,
      amount: amount,
      status: 'pending',
      ipAddress: await this.fetchIpAddress(),
      createdAt: new Date(),
      planName: this.selectedPlan?.name,
      currency: this.selectedPlan?.currency ?? 'XAF',
      provider: 'notchpay'
    };

    try {
      await this.supabaseService.savePayment(paymentData);
      this.isSavingData.set(false);
      this.redirectToNotchPay();
    } catch (error) {
      console.log(error);
      alert('Erreur lors de l\'enregistrement. Veuillez réessayer plus tard.');
    }
  }

  async redirectToNotchPay() {
    const notchpay = new NotchpayClient({ publicKey: environment.notchpayPublicKey });
    const paymentData = {
      amount: this.selectedPlan?.price ?? 25000,
      currency: this.selectedPlan?.currency ?? 'XAF',
      reference: this.paymentId,
      description: "Achat d'une licence pour le logiciel StockPro",
      customer: {
        email: this.userInfo.email,
        name: this.userInfo.firstName + ' ' + this.userInfo.lastName
      },
      callback: `${window.location.origin}/download?payment=${this.paymentId}`
    };

    try {
      const response = await notchpay.payments.create(paymentData);
      const paymentUrl = response.authorization_url;
      window.location.href = paymentUrl;
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Une erreur est survenue lors de la création du paiement. Veuillez réessayer.');
      await this.supabaseService.updatePaymentStatus(this.paymentId, 'failed');
    }
  }

  async onPaymentSuccess(params: Params) {
    await this.updateUserInfo();
    this.licenseKey = await this.generateLicenseKey();
    const providerReference = params['reference'];
    await this.supabaseService.updatePaymentStatus(this.paymentId, 'completed', providerReference, this.licenseKey);
    this.isLoadingLicense.set(false);
  }

  private async updateUserInfo() {
    try {
      const paymentData = await this.supabaseService.getPayment(this.paymentId);
      console.log(paymentData);
      this.userInfo = paymentData?.userInfo as UserInfo;
      this.selectedPlan = this.planService.getPlanByName(paymentData?.planName || '') || this.planService.getFreePlan();
    } catch (error) {
      console.log(error);
      alert('Erreur lors de la récupération des informations utilisateur.');
    }
  }

  downloadLicenseKey() {
    const content = `StockPro Desktop License Key\n\nNom: ${this.userInfo.firstName} ${this.userInfo.lastName}\nEmail: ${this.userInfo.email}\nClé de licence: ${this.licenseKey}\n\nInstructions:\n1. Ouvrez StockPro Desktop\n2. Allez dans Paramètres > A propos du logiciel > Activer la licence\n3. Saisissez votre clé de licence\n4. Cliquez sur Activer`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'StockPro-License.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  private async generateLicenseKey(): Promise<string> {
    try {
      return await this.supabaseService.generateLicenseKey(this.userInfo.email, this.selectedPlan?.type ?? 'free');
    } catch (error) {
      console.error('Error generating license key:', error);
      throw error;
    }
  }

  /** Function to fetch current user IP address */
  private async fetchIpAddress(): Promise<string> {
    try {
      let response = await fetch('https://api.ipify.org/?format=json');
      if (response.ok) {
        let data = await response.json();
        return data.ip;
      } else {
        console.error('Error fetching IP address:', response.statusText);
        return 'Unknown';
      }
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return 'Unknown';
    }
  }
}
