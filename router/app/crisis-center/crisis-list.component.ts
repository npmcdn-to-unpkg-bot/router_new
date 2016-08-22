import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';
import { CrisisService } from './crisis.service';
import {Crisis} from  './crisis'
import { Subscription }          from 'rxjs/Subscription';

@Component({
    selector: 'my-crises',
    moduleId: module.id,
    templateUrl: './crises.list.html',
    styleUrls: ['./crises.component.css']
})
export class CrisisListComponent implements OnInit, OnDestroy {
    crises: Crisis[];
    selectedId: number;
    private sub: Subscription;
    constructor(
        private service: CrisisService,
        private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = +params['id'];
                this.service.getCrises()
                    .then(crises => this.crises = crises);
            });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onSelect(crisis: Crisis) {
        // Absolute link
        this.router.navigate(['/crisis-center', crisis.id]);
    }
}

