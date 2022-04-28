import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
    @Input()
    startAt = 1;

    @Input()
    showTimeRemaining = true;

    @Output()
    counterState = new EventEmitter();

    currentValue = '';

    currentSubscription: Subscription;

    constructor(private changeDetector: ChangeDetectorRef) {}

    ngOnInit(): void {}

    start() {
        this.currentValue = this.formatValue(this.startAt);

        this.changeDetector.detectChanges();

        const t: Observable<number> = interval(1000);

        this.currentSubscription = t
            .pipe(
                take(this.startAt),
                map((v) => this.startAt - (v + 1))
            )
            .subscribe(
                (v) => {
                    this.currentValue = this.formatValue(v);
                    this.changeDetector.detectChanges();
                },
                () => {
                    this.currentSubscription.unsubscribe();
                    this.currentValue = '000';
                    this.counterState.emit('COMPLETE');
                    this.changeDetector.detectChanges();
                }
            );
    }

    private formatValue(v) {
        const minutes = Math.floor(v / 60);
        const formattedMinutes = '' + (minutes > 9 ? minutes : '0' + minutes);
        const seconds = v % 60;
        const formattedSeconds = '' + (seconds > 9 ? seconds : '0' + seconds);

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    public stop() {
        this.currentSubscription.unsubscribe();
        this.counterState.emit('ABORTED');
    }
}
