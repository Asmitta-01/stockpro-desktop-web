import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFeatures } from './software-features';

describe('SoftwareFeatures', () => {
  let component: SoftwareFeatures;
  let fixture: ComponentFixture<SoftwareFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareFeatures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
