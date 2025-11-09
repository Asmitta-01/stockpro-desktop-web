import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareIntegration } from './software-integration';

describe('SoftwareIntegration', () => {
  let component: SoftwareIntegration;
  let fixture: ComponentFixture<SoftwareIntegration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareIntegration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareIntegration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
