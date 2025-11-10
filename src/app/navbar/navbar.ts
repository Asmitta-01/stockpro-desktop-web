import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  downloadLink!: string;

  ngOnInit(): void {
    this.downloadLink = 'https://stockpro-desktop.fr.uptodown.com/windows';
  }

}
