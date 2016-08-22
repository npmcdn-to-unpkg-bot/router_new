import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable }         from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: './crisis-admin.component.html'
})
export class CrisisAdminComponent implements OnInit {
    sessionId: Observable<string>;
    token: Observable<string>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParams
            .map(params => params['session_id'] || 'None');

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .map(fragment => fragment || 'None');
    }  
}
