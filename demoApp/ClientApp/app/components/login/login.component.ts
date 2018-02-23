import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    constructor(private router: Router, private authService: AuthenticationService, private user: User) { }

    ngOnInit() {
    }

    login(e: any) {
        e.preventDefault();
        console.log(e);
        var username = e.target.elements[0].value;
        var password = e.target.elements[1].value;
        this.authService.authenticate(username, password)
            .subscribe(res => this.user = res);
        console.log(this.user);
        if (this.user.username != null) {
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.authService.setUserLoggedIn();
            this.router.navigate(['dashboard']);
        }
    }
}
