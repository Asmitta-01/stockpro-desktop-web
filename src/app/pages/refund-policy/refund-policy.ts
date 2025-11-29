import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";

@Component({
  selector: 'app-refund-policy',
  imports: [Navbar, SubpageHeader],
  templateUrl: './refund-policy.html',
  styleUrl: './refund-policy.css',
})
export class RefundPolicy {

}
