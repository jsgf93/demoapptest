import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    private isUserLoggedIn: boolean;
    private username: string;

    constructor(private http: Http) {
        this.isUserLoggedIn = false;
    }

    authenticate(username: string, password: string) {
        let serviceURL = "/api/Users/Authenticate";
        return this.http.post(serviceURL, { username: username, password: password })
            .map((res: Response) => res.json());
    }

    setUserLoggedIn() {
        this.isUserLoggedIn = true;
    }

    getUserLoggedIn() {
        return this.isUserLoggedIn;
    }

}

export class User {
    constructor(
        public username: string,
        public validate: boolean
    ) { }

}
