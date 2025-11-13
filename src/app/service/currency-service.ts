import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currency: string = 'XAF';
  private currencyList: string[] = [
    'USD',
    'EUR',
    'GBP',
    'XAF'
  ];

  getCurrency(): string {
    return this.currency;
  }

  setCurrency(currency: string): void {
    this.currency = currency;
  }

  getCurrencyList(): string[] {
    return this.currencyList;
  }

}
