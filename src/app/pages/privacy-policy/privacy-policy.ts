import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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
export class PrivacyPolicyPage implements OnInit {
  markdownContent = '';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { };

  ngOnInit() {
    // Only attempt to fetch the local markdown file in the browser.
    // During server-side prerender the relative HTTP request will fail
    // and cause the build to error (uncaughtException). Skipping the
    // request during SSR prevents that runtime error.
    if (isPlatformBrowser(this.platformId)) {
      this.http.get('docs/privacy-policy.md', { responseType: 'text' })
        .subscribe(html => {
          this.markdownContent = this.parseMarkdown(html);
        }, err => {
          console.warn('Unable to load privacy policy:', err);
          this.markdownContent = '';
        });
    } else {
      // Server-side: do not fetch. Leave content empty (client will load).
      this.markdownContent = '';
    }
  }

  private parseMarkdown(markdown: string): string {
    return markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
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