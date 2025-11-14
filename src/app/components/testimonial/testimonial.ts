import { Component } from '@angular/core';
import { Testimonial as TestimonialInterface } from '../../models/testimonial.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.css',
})
export class Testimonial {
  testimonials: TestimonialInterface[] = [
    {
      id: 'abc',
      text: "Depuis l'adoption de StockPro, nous avons réduit nos erreurs d'inventaire de 90 % et gagné un temps précieux sur les commandes. L'interface est intuitive et le suivi en temps réel a été un véritable changement de jeu pour notre logistique.",
      author: 'Alain YONTA',
      position: 'Directeur Général',
      company: 'ABC Quincaillerie',
      authorImage: 'https://block.codescandy.com/assets/images/avatar/avatar-1.jpg',
      companyImage: 'images/brand-logos/abc.png'
    },
    {
      id: 'netlify',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus nobis esse, accusamus repellendus labore maiores dicta inventore optio perspiciatis Corrupti.',
      author: 'Christilla Lias',
      position: 'Co-Founder',
      company: 'Design agency',
      authorImage: 'https://block.codescandy.com/assets/images/avatar/avatar-2.jpg',
      companyImage: 'https://block.codescandy.com/assets/images/brand-logo/brand-logo-3.svg'
    },
    {
      id: 'contentful',
      text: 'Ducimus repellendus dolores rerum, nihil magni veritatis deleniti adipisci alias vero, id similique ab debitis dolorem doloribus! Consectetur.',
      author: 'Leon Campbell',
      position: 'Web Designer',
      company: 'Design agency',
      authorImage: 'https://block.codescandy.com/assets/images/avatar/avatar-3.jpg',
      companyImage: 'https://block.codescandy.com/assets/images/brand-logo/brand-logo-5.svg'
    },
    {
      id: 'svelte',
      text: 'Id maxime odio laborum aspernatur nisi illum dicta? Dolorum in saepe fugit. Aliquam, sit, rerum nihil labore ullam ducimus dolor odit vel rem voluptatibus dolores! Qui, obcaecati!',
      author: 'Mian Netwon',
      position: 'Lead Developer',
      company: 'Design agency',
      authorImage: 'https://block.codescandy.com/assets/images/avatar/avatar-4.jpg',
      companyImage: 'https://block.codescandy.com/assets/images/brand-logo/brand-logo-7.svg'
    }
  ];
}
