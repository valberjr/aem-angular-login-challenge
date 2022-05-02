import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabelService } from 'src/app/services/label.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { User } from 'src/app/user';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() label: string;
    @Input() url: string;

    constructor(
        private localStorageService: LocalStorageService,
        private router: Router,
        private labelService: LabelService
    ) {}

    ngOnInit(): void {}

    onClick() {
        const user: User = {
            username: this.localStorageService.get('username'),
            password: this.localStorageService.get('password'),
        };

        if (user) {
            this.login(this.url, user);
        } else {
            console.log('redirecting to: ... ');
        }
    }

    login(url, user: User) {
        if (user.username === 'aaa' && user.password === '123') {
            this.router.navigate([this.url]);
        } else {
            this.labelService.setInvalidLogin(true);
        }
    }
}

MapTo('angularapp/components/button-component')(ButtonComponent);
