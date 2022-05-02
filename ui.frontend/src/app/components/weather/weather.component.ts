import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from './weather.service';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
    weather: Weather = {};

    constructor(private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.weatherService.getWeather().subscribe((weather: Weather) => {
            this.weather = weather;
        });
    }
}

MapTo('angularapp/components/weather-component')(WeatherComponent);
