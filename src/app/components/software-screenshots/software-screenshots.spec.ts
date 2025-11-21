import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareScreenshots } from './software-screenshots';

describe('SoftwareScreenshots', () => {
  let component: SoftwareScreenshots;
  let fixture: ComponentFixture<SoftwareScreenshots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareScreenshots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareScreenshots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
