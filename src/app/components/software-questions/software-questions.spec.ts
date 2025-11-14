import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareQuestions } from './software-questions';

describe('SoftwareQuestions', () => {
  let component: SoftwareQuestions;
  let fixture: ComponentFixture<SoftwareQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
