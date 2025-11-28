import { Component, OnInit, Inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, Navbar, SubpageHeader],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.css'],
})
export class PrivacyPolicyPage {
  markdownContent = '<div class="spinner-border" role="status"><span class="visually-hidden">';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        const element = document.getElementById('content');
        this.http.get('docs/privacy-policy.md', { responseType: 'text' })
          .subscribe({
            next: (html) => {
              this.markdownContent = this.parseMarkdown(html);
              if (element) { element.innerHTML = this.markdownContent; }
            },
            error: (err) => {
              console.warn('Unable to load privacy policy:', err);
              this.markdownContent = 'Erreur lors du chargement du contenu de la politique de confidentialité.';
            }
          });
      }
    })
  }

  private parseMarkdown(markdown: string): string {
    return markdown
      .replace(/^# (.*$)/gim, '<h1 class=\'d-none\'>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|l])/gm, '<p>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/<\/p><p><ul>/g, '<ul>')
      .replace(/<\/ul><\/p>/g, '</ul>');
  }
}