import { Component, OnInit } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { SubpageHeader } from "../subpage-header/subpage-header";
import { SectorManager } from '../models/sector-manager.model';
import { BusinessSector } from '../models/sector.interface';

@Component({
  selector: 'app-reasons-page',
  imports: [Navbar, SubpageHeader],
  templateUrl: './reasons-page.html',
  styleUrl: './reasons-page.css',
})
export class ReasonsPage implements OnInit {
  ngOnInit(): void {
    this.sectorManager = new SectorManager();
  }

  private sectorManager!: SectorManager;

  getSectors(): BusinessSector[] {
    return this.sectorManager.getAllSectors();
  }

}
