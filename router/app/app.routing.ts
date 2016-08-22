import { Routes, RouterModule }  from '@angular/router';
import { loginRoutes,
    authProviders }      from './login.routing';
const crisisCenterRoutes: Routes = [
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
    }
];

const appRoutes: Routes = [
    ...loginRoutes,
    ...crisisCenterRoutes
];


export const appRoutingProviders: any[] = [
    authProviders
];
export const routing = RouterModule.forRoot(appRoutes);
