"use strict";
var router_1 = require('@angular/router');
var login_routing_1 = require('./login.routing');
var crisisCenterRoutes = [
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
var appRoutes = login_routing_1.loginRoutes.concat(crisisCenterRoutes);
exports.appRoutingProviders = [
    login_routing_1.authProviders
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map