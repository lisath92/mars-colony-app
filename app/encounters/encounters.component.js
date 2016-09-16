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
var encounter_services_1 = require('../shared/services/encounter-services');
var EncountersComponent = (function () {
    function EncountersComponent(encounterService) {
        var _this = this;
        this.encounterService = encounterService;
        encounterService.getEncounters().then(function (encounterReports) { return _this.encounters = encounterReports; });
    }
    EncountersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-encounters',
            templateUrl: 'encounters.component.html',
            styleUrls: ['encounters.component.css']
        }), 
        __metadata('design:paramtypes', [encounter_services_1.EncounterService])
    ], EncountersComponent);
    return EncountersComponent;
}());
exports.EncountersComponent = EncountersComponent;
//# sourceMappingURL=encounters.component.js.map