import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SoftwareStart } from "./software-start/software-start";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SoftwareStart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stockpro-desktop-web');
}
