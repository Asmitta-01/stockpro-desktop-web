import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { FeaturesPage } from './pages/features-page/features-page';
import { ReasonsPage } from './pages/reasons-page/reasons-page';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'features', component: FeaturesPage },
    { path: 'reasons', component: ReasonsPage }
];
