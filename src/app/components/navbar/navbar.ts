import { Component } from '@angular/core';
import { CurrencyService } from '../../services/currency-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private currencyService: CurrencyService) { }

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
