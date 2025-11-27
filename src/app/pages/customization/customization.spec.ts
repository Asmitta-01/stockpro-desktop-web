import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomizationPage } from './customization';

describe('CustomizationPage', () => {
    let component: CustomizationPage;
    let fixture: ComponentFixture<CustomizationPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomizationPage]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomizationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
