import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-support',
  imports: [],
  templateUrl: './software-support.html',
  styleUrl: './software-support.css',
})
export class SoftwareSupport implements OnInit {
  imageUrl!: string;

  ngOnInit(): void {
    this.imageUrl = 'https://block.codescandy.com/assets/images/landings/account/account-support.jpg';
  }

}
