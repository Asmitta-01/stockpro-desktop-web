import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProduct } from './software-product';

describe('SoftwareProduct', () => {
  let component: SoftwareProduct;
  let fixture: ComponentFixture<SoftwareProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
