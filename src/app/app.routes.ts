import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { FeaturesPage } from './features-page/features-page';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'features', component: FeaturesPage }
];
