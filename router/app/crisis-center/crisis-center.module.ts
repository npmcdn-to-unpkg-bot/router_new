import {NgModule} from '@angular/core'
import {CrisisService} from './crisis.service'
import { CrisisDetailResolve }  from './crisis-detail-resolve.service';


@NgModule({
    providers: [CrisisService,
        CrisisDetailResolve]
})

export class CrisisCenterModule { }