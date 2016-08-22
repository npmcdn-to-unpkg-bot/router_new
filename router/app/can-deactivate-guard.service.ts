import { Injectable }    from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable }    from 'rxjs/Observable';
export interface CanComponentDeactivate {

    //canDeactivate: () => boolean | Observable<boolean>;
    //same same...
    canDeactivate(): boolean | Observable<boolean>;

}
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}


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

