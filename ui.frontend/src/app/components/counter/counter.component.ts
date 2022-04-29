import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
    @Input()
    startAt;

    @Output()
    counterState = new EventEmitter();

    currentValue: number;
    reset = false;

    currentSubscription: Subscription;

    constructor(
        private changeDetector: ChangeDetectorRef,
        private router: Router,
        private localStorageService: LocalStorageService
    ) {}

    ngOnInit(): void {}

    start() {
        const time: Observable<number> = interval(1000);

        this.currentValue = this.startAt;
        this.changeDetector.detectChanges();

        this.currentSubscription = time
            .pipe(
                take(this.startAt),
                map((v) => this.startAt - (v + 1)),
                finalize(() => {
                    if (!this.reset) {
                        this.stop();
                        this.localStorageService.clear();
                        this.router.navigate([
                            '/content/angularapp/us/en/login.html',
                        ]);
                    }
                })
            )
            .subscribe((value) => {
                this.reset = false;
                this.currentValue = value;
                this.changeDetector.detectChanges();
            });
    }

    stop() {
        this.currentSubscription.unsubscribe();
    }
}
