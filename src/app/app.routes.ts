import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { FeaturesPage } from './pages/features-page/features-page';
import { ReasonsPage } from './pages/reasons-page/reasons-page';
import { DownloadPage } from './pages/download-page/download-page';
import { HelpCenterPage } from './pages/help-center/help-center';
import { CustomizationPage } from './pages/customization/customization';
import { PrivacyPolicyPage } from './pages/privacy-policy/privacy-policy';
import { RefundPolicy } from './pages/refund-policy/refund-policy';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'features', component: FeaturesPage, title: 'Fonctionnalités de StockPro Desktop' },
    { path: 'reasons', component: ReasonsPage, title: 'Pourquoi choisir StockPro' },
    { path: 'download', component: DownloadPage, title: 'Téléchargement de StockPro' }
    , { path: 'help', component: HelpCenterPage, title: "Centre d'aide" }
    , { path: 'customization', component: CustomizationPage, title: 'Personnalisation' },
    { path: 'refund-policy', component: RefundPolicy, title: 'Politique de licence et de remboursement' },
    { path: 'privacy-policy', component: PrivacyPolicyPage, title: 'Politique de confidentialité' }
];
