"use strict";
var router_1 = require('@angular/router');
var home_1 = require('./home');
var arrival_1 = require('./arrival');
var encounters_1 = require('./encounters');
var report_1 = require('./report');
var posts_1 = require('./posts');
var appRoutes = [
    {
        path: '',
        component: home_1.HomeComponent
    },
    {
        path: 'arrival',
        component: arrival_1.ArrivalComponent
    },
    {
        path: 'encounters',
        component: encounters_1.EncountersComponent
    },
    {
        path: 'report',
        component: report_1.ReportComponent
    },
    {
        path: 'posts',
        component: posts_1.PostsComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map