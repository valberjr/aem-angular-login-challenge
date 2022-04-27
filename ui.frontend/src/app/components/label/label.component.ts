import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from 'src/app/label.service';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
    @Input() label: string;

    isInvalidLogin = false;

    constructor(private labelService: LabelService) {
        this.labelService.getInvalidLogin().subscribe((invalid) => {
            this.isInvalidLogin = invalid;
        });
    }

    ngOnInit(): void {}
}

MapTo('angularapp/components/label-component')(LabelComponent);
