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
var models_1 = require('../models');
var alien_services_1 = require('../shared/services/alien-services');
var encounter_services_1 = require('../shared/services/encounter-services');
var router_1 = require('@angular/router');
var ReportComponent = (function () {
    function ReportComponent(router, encounterService, alienService) {
        var _this = this;
        this.router = router;
        this.encounterService = encounterService;
        this.alienService = alienService;
        this.NO_ALIEN_SELECTED = '(none)';
        this.errorMessage = '';
        this.encounter = new models_1.Encounter(sessionStorage.getItem('colonist'), this.NO_ALIEN_SELECTED, '', '');
        alienService.getAliens().then(function (alienTypes) { return _this.aliens = alienTypes; });
    }
    ReportComponent.prototype.onSubmit = function () {
        var _this = this;
        this.encounterService.addEncounters({
            "encounter": this.encounter
        })
            .then(function (encounter) {
            _this.router.navigate(['/encounters']);
        }).catch(function (error) {
            _this.errorMessage = "Oops, something went wrong!";
        });
    };
    Object.defineProperty(ReportComponent.prototype, "noAlienSelected", {
        get: function () {
            return this.encounter.atype === this.NO_ALIEN_SELECTED;
        },
        enumerable: true,
        configurable: true
    });
    ReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-report',
            templateUrl: 'report.component.html',
            styleUrls: ['report.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, encounter_services_1.EncounterService, alien_services_1.AlienService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.component.js.map