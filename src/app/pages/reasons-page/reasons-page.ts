import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { SectorManager } from '../../models/sector-manager.model';
import { BusinessSector } from '../../models/sector.interface';

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
