import { Component } from '@angular/core';
import { SoftwareQuestions } from "../../components/software-questions/software-questions";
import { Navbar } from "../../components/navbar/navbar";
import { SoftwareStart } from "../../components/software-start/software-start";
import { SoftwareProduct } from "../../components/software-product/software-product";
import { SoftwareTarget } from "../../components/software-target/software-target";
import { Testimonial } from "../../components/testimonial/testimonial";
import { SoftwarePricing } from "../../components/software-pricing/software-pricing";
import { SoftwareSupport } from "../../components/software-support/software-support";

@Component({
  selector: 'app-landing-page',
  imports: [SoftwareQuestions, Navbar, SoftwareStart, SoftwareProduct, SoftwareTarget, Testimonial, SoftwarePricing, SoftwareSupport],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
