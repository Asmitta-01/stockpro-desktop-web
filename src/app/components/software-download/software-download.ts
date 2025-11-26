import { Component } from '@angular/core';

@Component({
  selector: 'app-software-download',
  imports: [],
  templateUrl: './software-download.html',
  styleUrl: './software-download.css',
})
export class SoftwareDownload {
  downloadLink = 'https://github.com/Asmitta-01/stockpro-desktop/releases/download/1.6.1.10/StockPro-Setup.exe';
  uptodownLink = 'https://stockpro-desktop.fr.uptodown.com/windows';
  config = [
    ["OS", "Windows 7, 8, 10 & 11"],
    ["RAM", "1 GB minimum, 4 GB recommandé"],
    ["Stockage", "500 MB d'espace libre"],
    ["Réseau", "Aucune connexion internet requise"],
  ];
}
