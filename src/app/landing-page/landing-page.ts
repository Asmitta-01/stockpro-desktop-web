import { Component } from '@angular/core';
import { SoftwareQuestions } from "../software-questions/software-questions";
import { Navbar } from "../navbar/navbar";
import { SoftwareStart } from "../software-start/software-start";
import { SoftwareProduct } from "../software-product/software-product";
import { SoftwareTarget } from "../software-target/software-target";
import { Testimonial } from "../testimonial/testimonial";
import { SoftwarePricing } from "../software-pricing/software-pricing";
import { SoftwareSupport } from "../software-support/software-support";

@Component({
  selector: 'app-landing-page',
  imports: [SoftwareQuestions, Navbar, SoftwareStart, SoftwareProduct, SoftwareTarget, Testimonial, SoftwarePricing, SoftwareSupport],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
