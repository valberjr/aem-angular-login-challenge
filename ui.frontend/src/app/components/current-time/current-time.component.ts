import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-current-time',
    templateUrl: './current-time.component.html',
    styleUrls: ['./current-time.component.scss'],
})
export class CurrentTimeComponent implements OnInit {
    time;
    year;
    date;

    constructor() {}

    ngOnInit(): void {
        const date = new Date();
        const day = date.getDate();

        this.time = date.toLocaleTimeString('pt-BR').replace(/(.*)\D\d+/, '$1');

        let week;

        switch (date.getDay()) {
            case 0:
                week = 'domingo';
                break;
            case 1:
                week = 'segunda-feira';
                break;
            case 2:
                week = 'terça-feira';
                break;
            case 3:
                week = 'quarta-feira';
                break;
            case 4:
                week = 'quinta-feira';
                break;
            case 5:
                week = 'sexta-feira';
                break;
            case 6:
                week = 'sábado';
                break;
            default:
        }

        let month;

        switch (date.getMonth()) {
            case 0:
                month = 'Janeiro';
                break;
            case 1:
                month = 'Fevereiro';
                break;
            case 2:
                month = 'Março';
                break;
            case 3:
                month = 'Abril';
                break;
            case 4:
                month = 'Maio';
                break;
            case 5:
                month = 'Junho';
                break;
            case 6:
                month = 'Julho';
                break;
            case 7:
                month = 'Agosto';
                break;
            case 8:
                month = 'Setembro';
                break;
            case 9:
                month = 'Outubro';
                break;
            case 10:
                month = 'Novembro';
                break;
            case 11:
                month = 'Dezembro';
                break;
            default:
        }

        this.year = date.getFullYear();

        this.date = `${week}, ${day} de ${month} de ${this.year}`;
    }
}

MapTo('angularapp/components/current-time-component')(CurrentTimeComponent);
