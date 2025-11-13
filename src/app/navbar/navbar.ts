import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  downloadLink!: string;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.downloadLink = 'https://stockpro-desktop.fr.uptodown.com/windows';
  }

  getCurrentCurrency(): string {
    return this.currencyService.getCurrency();
  }

  getCurrencies(): string[] {
    return this.currencyService.getCurrencyList()
  }

  setCurrency(currency: string): void {
    this.currencyService.setCurrency(currency);
  }

}
