import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-current-time',
    templateUrl: './current-time.component.html',
    styleUrls: ['./current-time.component.scss'],
})
export class CurrentTimeComponent implements OnInit {
    now = new Date();

    constructor() {}

    ngOnInit(): void {}
}

MapTo('angularapp/components/current-time-component')(CurrentTimeComponent);
