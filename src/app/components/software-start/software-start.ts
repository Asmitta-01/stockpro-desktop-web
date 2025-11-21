import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-software-start',
  imports: [RouterLink],
  templateUrl: './software-start.html',
  styleUrl: './software-start.css',
})
export class SoftwareStart implements OnInit {
  imageUrl!: string;


  ngOnInit(): void {
    this.imageUrl = 'images/hero.png';
  }
}
