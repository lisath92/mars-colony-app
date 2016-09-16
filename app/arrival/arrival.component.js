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
var colonist_services_1 = require('../shared/services/colonist-services');
var occupation_services_1 = require('../shared/services/occupation-services');
var router_1 = require('@angular/router');
var ArrivalComponent = (function () {
    function ArrivalComponent(router, colonistService, occupationService) {
        var _this = this;
        this.router = router;
        this.colonistService = colonistService;
        this.occupationService = occupationService;
        this.NO_OCCUPATION_SELECTED = '(none)';
        this.errorMessage = '';
        this.colonist = new models_1.Colonist('', this.NO_OCCUPATION_SELECTED, '', '');
        occupationService.getOccupations().then(function (jobs) { return _this.occupations = jobs; });
    }
    Object.defineProperty(ArrivalComponent.prototype, "noOccupation", {
        get: function () {
            return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
        },
        enumerable: true,
        configurable: true
    });
    ArrivalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.colonistService.newColonist(this.colonist)
            .then(function (colonist) {
            sessionStorage.setItem('colonist', colonist.id);
            _this.router.navigate(['/encounters']);
        }).catch(function (error) {
            _this.errorMessage = "Oops, something went wrong! ";
        });
    };
    ArrivalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-arrival',
            templateUrl: 'arrival.component.html',
            styleUrls: ['arrival.component.css'],
            providers: [occupation_services_1.OccupationService, colonist_services_1.ColonistService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, colonist_services_1.ColonistService, occupation_services_1.OccupationService])
    ], ArrivalComponent);
    return ArrivalComponent;
}());
exports.ArrivalComponent = ArrivalComponent;
//# sourceMappingURL=arrival.component.js.map