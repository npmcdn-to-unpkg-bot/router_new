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
var router_1 = require('@angular/router');
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_service_1 = require('./crisis.service');
var CrisesListComponent = (function () {
    function CrisesListComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    CrisesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCrises().then(function (crises) { return _this.crises = crises; });
    };
    CrisesListComponent.prototype.onSelect = function (crisis) {
        this.router.navigate(['/crisis', crisis.id]);
    };
    CrisesListComponent = __decorate([
        core_1.Component({
            selector: 'my-crises',
            moduleId: module.id,
            templateUrl: './crises.list.html',
            styleUrls: ['./crises.component.css'],
            directives: [crisis_detail_component_1.CrisisDetailComponent],
        }), 
        __metadata('design:paramtypes', [router_1.Router, crisis_service_1.CrisisService])
    ], CrisesListComponent);
    return CrisesListComponent;
}());
exports.CrisesListComponent = CrisesListComponent;
//# sourceMappingURL=crises-list.component.js.map