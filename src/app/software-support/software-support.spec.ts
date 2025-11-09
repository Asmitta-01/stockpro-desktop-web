import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSupport } from './software-support';

describe('SoftwareSupport', () => {
  let component: SoftwareSupport;
  let fixture: ComponentFixture<SoftwareSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareSupport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
