import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-start',
  imports: [],
  templateUrl: './software-start.html',
  styleUrl: './software-start.css',
})
export class SoftwareStart implements OnInit {
  imageUrl!: string;


  ngOnInit(): void {
    this.imageUrl = 'images/hero.png';
  }
}
