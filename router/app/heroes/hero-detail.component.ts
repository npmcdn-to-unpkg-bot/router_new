import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    moduleId: module.id,
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;

    error: any;
    private sub: Subscription;


    constructor(private router: Router,
        private heroService: HeroService,
        private route: ActivatedRoute) {    }
   
    gotoHeroes() { this.router.navigate(['/heroes']); }



    ngOnInit() {

        // (+) converts string 'id' to a number

        //1
        //---- 
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });

        //2
        //---Suppose we know for certain that HeroDetailComponent will never, never, ever be re-used...
        //let id = +this.route.snapshot.params['id'];
        //this.heroService.getHero(id).then(hero => this.hero = hero);


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}