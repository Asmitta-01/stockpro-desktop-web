import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareStart } from './software-start';

describe('SoftwareStart', () => {
  let component: SoftwareStart;
  let fixture: ComponentFixture<SoftwareStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareStart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareStart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
