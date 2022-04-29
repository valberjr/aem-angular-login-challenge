import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    @Input() placeholder: string;

    value: string;
    valueChanged: Subject<string> = new Subject<string>();

    constructor() {}

    ngOnInit(): void {
        this.placeholder = 'Buscar usuário';
        this.valueChanged
            .pipe(debounceTime(1000), distinctUntilChanged())
            .subscribe((model) => {
                this.value = model;
            });
    }

    onChange(value: string) {
        this.valueChanged.next(value);
    }
}

MapTo('angularapp/components/search-component')(SearchComponent);
