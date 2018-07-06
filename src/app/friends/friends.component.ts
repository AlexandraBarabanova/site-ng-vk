import { Component, OnInit } from '@angular/core';

import { AppService} from "../shared/app.service";

@Component ({
  selector: 'friends-list',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
    friendItems: Object;
    friend: any;

    constructor(private appService: AppService) {
        this.friendItems = [];
    }

    ngOnInit() {
        this.friendItems = this.appService.getFriends();
        // console.log(this.friendItems);
    }
}
