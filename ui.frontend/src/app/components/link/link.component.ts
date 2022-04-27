import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
    @Input() label: string;

    constructor() {}

    ngOnInit(): void {}

    onClick(): void {
        if (this.label === 'logout') {
            console.log('logout ....');
        } else {
            console.log('refresh na página');
        }
    }
}

MapTo('angularapp/components/link-component')(LinkComponent);
