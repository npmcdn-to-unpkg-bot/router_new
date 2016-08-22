import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable }    from 'rxjs/Observable';
import { DialogService }  from '../dialog.service';
import { Crisis } from './crisis';


@Component({
    moduleId: module.id,
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;
    editName: string;
    error: any;
    private sub: Subscription;


    constructor(private router: Router,
        private route: ActivatedRoute, private dialogService: DialogService) { }

    gotoHeroes() { this.router.navigate(['/crises']); }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }


    ngOnInit() {
        // We'll take the relevant parts of the ngOnInit lifecycle hook in our CrisisDetailComponent and moved them into our CrisisDetailResolve guard
        // (+) converts string 'id' to a number

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

        this.route.data.forEach((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        });


    }
    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises(): void {
        let crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the hero id if available
        // so that the CrisisListComponent can select that hero.
        // Add a totally useless `foo` parameter for kicks.
        // Absolute link
        this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
    }
    ngOnDestroy() {
        //We no longer need to subscribe and unsubscribe to the ActivatedRoute params 
        this.sub.unsubscribe();
    }


}