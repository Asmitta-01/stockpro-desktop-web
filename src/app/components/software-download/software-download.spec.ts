import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDownload } from './software-download';

describe('SoftwareDownload', () => {
  let component: SoftwareDownload;
  let fixture: ComponentFixture<SoftwareDownload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDownload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
