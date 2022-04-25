import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
    @Input() label: string;
    @Input() className: string;

    constructor() {}

    ngOnInit(): void {}
}

MapTo('angularapp/components/label-component')(LabelComponent);
