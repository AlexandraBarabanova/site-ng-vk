import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    constructor(private router: Router) {
        const access_token: string = '#access_token=';
        const user_id: string = 'user_id=';
        let path: string = window.location.hash;
        console.log(path);
        if (path.indexOf(access_token) !== -1) {
            localStorage.setItem('access_token', path.substring(path.indexOf(access_token)+access_token.length, path.indexOf('&')));
            localStorage.setItem('user_id', path.substring(path.indexOf(user_id)+user_id.length, path.length));
            path = '#/friends';
        }
        console.log('test', localStorage.getItem('access_token'), localStorage.getItem('user_id'));
        if (path && path.length > 0) {
            this.router.navigate([path.substr(2)]);
        }
    }

    public ngOnInit() { }
}
