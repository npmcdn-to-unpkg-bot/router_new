import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import {CrisisAdminComponent} from './crisis-admin.component'
import {AuthGuard} from '../auth-guard.service'
const crisesRoutes: Routes = [
    { path: 'crises', component: CrisisListComponent },
    { path: 'crisis/:id', component: CrisisDetailComponent },
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
        //pathMatch: 'prefix' tells the router to match the redirect route when the remaining URL begins with the redirect route's prefix path
    },
    {
        path: 'admin',
        component: CrisisAdminComponent,
        canActivate: [AuthGuard]
    },


];
export const crisesRouting = RouterModule.forChild(crisesRoutes);
