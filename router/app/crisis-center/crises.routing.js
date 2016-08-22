"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_admin_component_1 = require('./crisis-admin.component');
var auth_guard_service_1 = require('../auth-guard.service');
var crisesRoutes = [
    { path: 'crises', component: crisis_list_component_1.CrisisListComponent },
    { path: 'crisis/:id', component: crisis_detail_component_1.CrisisDetailComponent },
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: crisis_admin_component_1.CrisisAdminComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    },
];
exports.crisesRouting = router_1.RouterModule.forChild(crisesRoutes);
//# sourceMappingURL=crises.routing.js.map