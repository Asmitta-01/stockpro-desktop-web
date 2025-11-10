import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SoftwareStart } from "./software-start/software-start";
import { SoftwareProduct } from "./software-product/software-product";
import { Navbar } from "./navbar/navbar";
import { Testimonial } from "./testimonial/testimonial";
import { SoftwareIntegration } from "./software-integration/software-integration";
import { SoftwareSupport } from "./software-support/software-support";
import { SoftwareQuestions } from "./software-questions/software-questions";
import { Footer } from "./footer/footer";
import { SoftwareTarget } from './software-target/software-target';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SoftwareStart, SoftwareProduct, Navbar,
    Testimonial, SoftwareIntegration,
    SoftwareSupport, SoftwareQuestions,
    Footer,
    SoftwareTarget
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stockpro-desktop-web');
}
