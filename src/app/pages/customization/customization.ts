import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { SubpageHeader } from '../../components/subpage-header/subpage-header';

@Component({
    selector: 'app-customization',
    imports: [CommonModule, Navbar, SubpageHeader],
    templateUrl: './customization.html',
    styleUrl: './customization.css'
})
export class CustomizationPage {
    image = '/images/custom-woman-setup.webp';
}
