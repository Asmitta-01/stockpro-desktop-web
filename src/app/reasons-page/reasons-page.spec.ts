import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsPage } from './reasons-page';

describe('ReasonsPage', () => {
  let component: ReasonsPage;
  let fixture: ComponentFixture<ReasonsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
