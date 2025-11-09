import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  logo!: string;

  ngOnInit(): void {
    this.logo = 'https://block.codescandy.com/assets/images/logo/logo.svg';
  }

}
