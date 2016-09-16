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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EncounterService = (function () {
    function EncounterService(http) {
        this.http = http;
        this.encounterUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';
    }
    EncounterService.prototype.getEncounters = function () {
        return this.http.get(this.encounterUrl)
            .toPromise().then(function (response) { return response.json().encounters; })
            .catch(this.handleError);
    };
    EncounterService.prototype.addEncounters = function (encounter) {
        var body = JSON.stringify(encounter);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.encounterUrl, body, { headers: headers })
            .toPromise().then(function (response) { return response.json().encounters; })
            .catch(this.handleError);
    };
    EncounterService.prototype.handleError = function (error) {
        console.error('An error occurred!', error);
        return Promise.reject(error.message || error);
    };
    EncounterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EncounterService);
    return EncounterService;
}());
exports.EncounterService = EncounterService;
//# sourceMappingURL=encounter-services.js.map