import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription'


@Component({
    selector: 'my-heroes',
    moduleId: module.id,
    templateUrl: './heroes.list.html',
    styleUrls: ['./heroes.component.css'],
    directives: [HeroDetailComponent],

})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedId: number;
    private sub: Subscription;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: HeroService) { }
    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = +params['id'];
                this.service.getHeroes()
                    .then(heroes => this.heroes = heroes);
            });
    }
    onSelect(hero: Hero) {
        this.router.navigate(['/hero', hero.id]);
    }

    isSelected(hero: Hero) { return hero.id === this.selectedId; }
}

