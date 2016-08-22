import {Injectable } from '@angular/core';

@Injectable()
export class DialogService {

    confirm(msg: string): boolean {
        return window.confirm(msg);
    }
}