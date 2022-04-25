import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { User } from 'src/app/user';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() label: string;

    constructor(
        private localStorageService: LocalStorageService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    login() {
        const user: User = {
            username: this.localStorageService.get('username'),
            password: this.localStorageService.get('password'),
        };

        if (user.username === 'aaa' && user.password === '123') {
            this.router.navigate(['content/angularapp/us/en/home.html']);
        }
    }
}

MapTo('angularapp/components/button-component')(ButtonComponent);
