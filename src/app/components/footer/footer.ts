import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  logo!: string;
  formUrl!: string;

  ngOnInit(): void {
    this.logo = 'logo-147x32.png';
    this.formUrl = 'https://tech.us19.list-manage.com/subscribe/post?u=6761a6214f504cd48b5a248c0&amp;id=6705a369aa&amp;f_id=003d21e7f0';
  }

}
