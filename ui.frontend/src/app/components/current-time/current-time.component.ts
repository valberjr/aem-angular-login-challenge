import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-current-time',
    templateUrl: './current-time.component.html',
    styleUrls: ['./current-time.component.scss'],
})
export class CurrentTimeComponent implements DoCheck {
    now;

    constructor() {}

    ngDoCheck(): void {
        this.now = new Date();
    }
}

MapTo('angularapp/components/current-time-component')(CurrentTimeComponent);
