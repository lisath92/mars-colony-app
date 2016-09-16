"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _1 = require('./app/');
var core_2 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_1 = require('./app/app.routing');
var home_1 = require('./app/home');
var arrival_1 = require('./app/arrival');
var encounters_1 = require('./app/encounters');
var report_1 = require('./app/report');
var forms_1 = require('@angular/forms');
var posts_1 = require('./app/posts');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule
            ],
            providers: [
                http_1.HTTP_PROVIDERS,
                app_routing_1.appRoutingProviders,
            ],
            declarations: [
                _1.AppComponent,
                home_1.HomeComponent,
                arrival_1.ArrivalComponent,
                encounters_1.EncountersComponent,
                report_1.ReportComponent,
                posts_1.PostsComponent
            ],
            exports: [_1.AppComponent],
            bootstrap: [_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map