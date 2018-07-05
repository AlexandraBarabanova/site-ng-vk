import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(private router: Router) {
        let path: string = window.location.hash;
        if (path && path.length > 0) {
            this.router.navigate([path.substr(2)]);
        }
    }

    public ngOnInit() { }
}
