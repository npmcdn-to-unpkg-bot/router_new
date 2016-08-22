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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_service_1 = require('./crisis.service');
var crises_routing_1 = require('./crises.routing');
var CrisesModule = (function () {
    function CrisesModule() {
    }
    CrisesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                crises_routing_1.crisesRouting
            ],
            declarations: [
                crisis_list_component_1.CrisisListComponent,
                crisis_detail_component_1.CrisisDetailComponent
            ],
            providers: [
                crisis_service_1.CrisisService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisesModule);
    return CrisesModule;
}());
exports.CrisesModule = CrisesModule;
//# sourceMappingURL=crises.module.js.map