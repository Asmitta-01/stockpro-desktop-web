import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { FeaturesPage } from './features-page/features-page';
import { ReasonsPage } from './reasons-page/reasons-page';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'features', component: FeaturesPage },
    { path: 'reasons', component: ReasonsPage }
];
