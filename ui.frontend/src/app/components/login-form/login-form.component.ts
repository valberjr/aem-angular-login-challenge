import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit() {
        const { username, password } = this.loginForm.value;

        if (username === 'aaa' && password === '123') {
            this.router.navigate(['content/angularapp/us/en/home.html']);
        }
    }
}

MapTo('angularapp/components/login-form-component')(LoginFormComponent);
