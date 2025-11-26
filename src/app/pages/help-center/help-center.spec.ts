import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpCenterPage } from './help-center';

describe('HelpCenterPage', () => {
    let component: HelpCenterPage;
    let fixture: ComponentFixture<HelpCenterPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HelpCenterPage]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HelpCenterPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
