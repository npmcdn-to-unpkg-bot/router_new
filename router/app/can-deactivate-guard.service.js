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
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;
// for class
//import { CrisisDetailComponent } from './crisis-center/crisis-detail.component';
//@Injectable()
//export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
//    canDeactivate(
//        component: CrisisDetailComponent,
//        route: ActivatedRouteSnapshot,
//        state: RouterStateSnapshot
//    ): Observable<boolean> | Promise<boolean> | boolean {
//        // Get the Crisis Center ID
//        console.log(route.params['id']);
//        // Get the current URL
//        console.log(state.url);
//        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
//        if (!component.crisis || component.crisis.name === component.editName) {
//            return true;
//        }
//        // Otherwise ask the user with the dialog service and return its
//        // promise which resolves to true or false when the user decides
//        return component.dialogService.confirm('Discard changes?');
//    }
//}
//# sourceMappingURL=can-deactivate-guard.service.js.map