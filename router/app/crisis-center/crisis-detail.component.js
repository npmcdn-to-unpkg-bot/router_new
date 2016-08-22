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
var dialog_service_1 = require('../dialog.service');
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(router, route, dialogService) {
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
    }
    CrisisDetailComponent.prototype.gotoHeroes = function () { this.router.navigate(['/crises']); };
    CrisisDetailComponent.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    };
    CrisisDetailComponent.prototype.ngOnInit = function () {
        // We'll take the relevant parts of the ngOnInit lifecycle hook in our CrisisDetailComponent and moved them into our CrisisDetailResolve guard
        // (+) converts string 'id' to a number
        var _this = this;
        //1
        //---- 
        //this.sub = this.route.params.subscribe(params => {
        //    let id = +params['id']; // (+) converts string 'id' to a number
        //    this.crisisService.geCrisis(id).then(crisis => this.crisis = crisis);
        //});
        //2
        //---Suppose we know for certain that HeroDetailComponent will never, never, ever be re-used...
        //let id = +this.route.snapshot.params['id'];
        //this.heroService.getHero(id).then(hero => this.hero = hero);
        this.route.data.forEach(function (data) {
            _this.editName = data.crisis.name;
            _this.crisis = data.crisis;
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.save = function () {
        this.crisis.name = this.editName;
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the hero id if available
        // so that the CrisisListComponent can select that hero.
        // Add a totally useless `foo` parameter for kicks.
        // Absolute link
        this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
    };
    CrisisDetailComponent.prototype.ngOnDestroy = function () {
        //We no longer need to subscribe and unsubscribe to the ActivatedRoute params 
        this.sub.unsubscribe();
    };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './crisis-detail.component.html',
            styleUrls: ['./crisis-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, dialog_service_1.DialogService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map