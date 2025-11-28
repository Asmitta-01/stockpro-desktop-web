import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, Navbar, SubpageHeader],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.css',
})
export class PrivacyPolicyPage implements OnInit {
  markdownContent = '';

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.http.get('/docs/privacy-policy.md', { responseType: 'text' })
      .subscribe(html => {
        this.markdownContent = this.parseMarkdown(html);
      });
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