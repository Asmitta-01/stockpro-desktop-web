import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTarget } from './software-target';

describe('SoftwareTarget', () => {
  let component: SoftwareTarget;
  let fixture: ComponentFixture<SoftwareTarget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareTarget]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftwareTarget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
