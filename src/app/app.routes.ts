import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { FeaturesPage } from './pages/features-page/features-page';
import { ReasonsPage } from './pages/reasons-page/reasons-page';
import { DownloadPage } from './pages/download-page/download-page';
import { HelpCenterPage } from './pages/help-center/help-center';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'features', component: FeaturesPage, title: 'Fonctionnalités de StockPro Desktop' },
    { path: 'reasons', component: ReasonsPage, title: 'Pourquoi choisir StockPro' },
    { path: 'download', component: DownloadPage, title: 'Téléchargement de StockPro' }
    , { path: 'help', component: HelpCenterPage, title: "Centre d'aide" }
];
