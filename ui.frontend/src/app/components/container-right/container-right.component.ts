import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container-right',
    templateUrl: './container-right.component.html',
    styleUrls: ['./container-right.component.scss'],
})
export class ContainerRightComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

MapTo('angularapp/components/container-right-component')(
    ContainerRightComponent
);
