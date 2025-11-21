import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { SoftwareScreenshots } from "../../components/software-screenshots/software-screenshots";

@Component({
  selector: 'app-download-page',
  imports: [Navbar, SubpageHeader, SoftwareScreenshots],
  templateUrl: './download-page.html',
  styleUrl: './download-page.css',
})
export class DownloadPage {

}
