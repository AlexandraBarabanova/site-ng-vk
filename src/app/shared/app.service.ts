import { Http, Headers, RequestOptions, JsonpModule, Jsonp, Response } from '@angular/http';
import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";

import { friendItems } from './data';
import { Friend } from './firend';
import 'rxjs-compat/add/operator/map';


@Injectable()
export class AppService {
        friendItems: Friend[] = friendItems;
        frined: Array<Object>;
        // public getFriends(): Friend[] {
        //     return this.friendItems;
        // }

        constructor(private jsonp: Jsonp) {}
        public getFriends(): any {

            // return this.http.jsonp('https://api.vk.com/method/friends.get?user_id=' + localStorage.getItem('user_id') +
            //                             '&v=5.52&access_token=' + localStorage.getItem('access_token'), 'callback');
            return this.jsonp.get('https://api.vk.com/method/friends.get?user_id=' + localStorage.getItem('user_id') +
                '&v=5.52&access_token=' + localStorage.getItem('access_token') + '&callback=JSONP_CALLBACK')
                .map(function(res: Response) {
                    console.log('fsdgbdf', res);
                    return res.json() || {};
                }).catch(function(error: any) {return Observable.throw(error);
                });
        }

    myCallBack = function(responseJson) {
        console.log(responseJson);
    };
        // private handleError(error: any) {
        //     console.log('ERROR!!!', error);
        // }
}