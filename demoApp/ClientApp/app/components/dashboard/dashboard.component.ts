import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from '../../services/authentication.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private authenticate: AuthenticationService) { }

    ngOnInit() {
    }

    clearUserData() {
        localStorage.removeItem('currentUser');
    }

}

