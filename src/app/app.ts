import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SoftwareStart } from "./software-start/software-start";
import { SoftwareProduct } from "./software-product/software-product";
import { Navbar } from "./navbar/navbar";
import { SoftwareFeatures } from "./software-features/software-features";
import { Testimonial } from "./testimonial/testimonial";
import { SoftwareIntegration } from "./software-integration/software-integration";
import { SoftwareSupport } from "./software-support/software-support";
import { SoftwareQuestions } from "./software-questions/software-questions";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SoftwareStart, SoftwareProduct, Navbar,
    SoftwareFeatures, Testimonial, SoftwareIntegration,
    SoftwareSupport, SoftwareQuestions,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stockpro-desktop-web');
}
