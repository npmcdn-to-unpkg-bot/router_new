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
var hero_service_1 = require('./hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(router, heroService, route) {
        this.router = router;
        this.heroService = heroService;
        this.route = route;
    }
    HeroDetailComponent.prototype.gotoHeroes = function () { this.router.navigate(['/heroes']); };
    HeroDetailComponent.prototype.ngOnInit = function () {
        // (+) converts string 'id' to a number
        var _this = this;
        //1
        //---- 
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
        //2
        //---Suppose we know for certain that HeroDetailComponent will never, never, ever be re-used...
        //let id = +this.route.snapshot.params['id'];
        //this.heroService.getHero(id).then(hero => this.hero = hero);
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            moduleId: module.id,
            templateUrl: './hero-detail.component.html',
            styleUrls: ['./hero-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map