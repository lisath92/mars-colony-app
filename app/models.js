"use strict";
var Colonist = (function () {
    function Colonist(name, job_id, age, id) {
        this.name = name;
        this.job_id = job_id;
        this.age = age;
        this.id = id;
    }
    return Colonist;
}());
exports.Colonist = Colonist;
var Encounter = (function () {
    function Encounter(colonist_id, atype, action, date) {
        this.colonist_id = colonist_id;
        this.atype = atype;
        this.action = action;
        this.date = date;
        this.date = this.formatDate;
    }
    Object.defineProperty(Encounter.prototype, "formatDate", {
        get: function () {
            var date = new Date();
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        },
        enumerable: true,
        configurable: true
    });
    return Encounter;
}());
exports.Encounter = Encounter;
//# sourceMappingURL=models.js.map