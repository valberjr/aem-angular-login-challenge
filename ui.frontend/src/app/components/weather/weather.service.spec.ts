import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

import { mockWeather } from 'src/mocks/mock-weather';

describe('WeatherService', () => {
    let service: WeatherService;
    let httpController: HttpTestingController;

    const url = 'http://api.openweathermap.org/data/2.5/weather';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [WeatherService],
        });

        service = TestBed.inject(WeatherService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // it('should call getWeather and return an weather object', () => {
    //     service.getWeather().subscribe((res) => {
    //         expect(res).toEqual(mockWeather);
    //     });

    //     const req = httpController.expectOne({
    //         method: 'GET',
    //         url: `${url}`,
    //     });

    //     req.flush(mockWeather);
    // });
});
