import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-product',
  imports: [],
  templateUrl: './software-product.html',
  styleUrl: './software-product.css',
})
export class SoftwareProduct implements OnInit {
  productsTabImageUrl!: string;
  productsTabForegroundImageUrl!: string;

  salesTabImageUrl!: string;
  salesTabForegroundImageUrl!: string;

  suppliersTabImageUrl!: string;
  suppliersTabForegroundImageUrl!: string;

  paymentsTabImageUrl!: string;
  paymentsTabForegroundImageUrl!: string;

  reportsTabImageUrl!: string;
  reportsTabForegroundImageUrl!: string;

  ngOnInit(): void {
    this.productsTabImageUrl = 'images/woman-filling-items.jpg';
    this.productsTabForegroundImageUrl = 'images/items-screen.webp';
    this.salesTabImageUrl = 'images/woman-cashier.jpg';
    this.salesTabForegroundImageUrl = 'images/operations-screen.webp';
    this.suppliersTabImageUrl = '';
    this.suppliersTabForegroundImageUrl = 'images/partner-screen.webp';
    this.paymentsTabImageUrl = 'images/persons-in-shop.webp';
    this.paymentsTabForegroundImageUrl = 'images/add-partner-screen.webp';
    this.reportsTabImageUrl = 'images/user-on-laptop.webp';
    this.reportsTabForegroundImageUrl = 'images/illustrations/reports-tab.svg';
  }

}
