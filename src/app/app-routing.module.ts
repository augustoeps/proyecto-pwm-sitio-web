import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/auth-module/components/sign-up/sign-up.component';
import { LogInComponent } from './pages/auth-module/components/log-in/log-in.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'services',
        loadChildren: () =>
            import('./pages/service-list/service-list.module').then(m => m.ServiceListPageModule)
    },
    {
        path: 'services/:id',
        loadChildren: () =>
            import('./pages/Service-detail/service-detail.module').then(m => m.ServiceDetailPageModule)
    },
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    },
    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'login', component: LogInComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
