import { Http, Headers, RequestOptions, JsonpModule, Jsonp } from '@angular/http';
import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

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

        constructor(private http: Http, private _jsonp: Jsonp) {}
        public getFriends(): any {
            const headers = new Headers();
            // headers.append('Access-Control-Allow-Headers', 'Content-Type');
            // headers.append('Content-Type', 'application/json');
            // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            headers.append('Origin', 'https://vk-oauth-ng.herokuapp.com');
            // headers.append('Api-User-Agent', 'Example/1.0');
            const options = new RequestOptions({ headers: headers});
            return this._jsonp
                .request('https://api.vk.com/method/friends.get?user_id=' + localStorage.getItem('user_id') +
                                        '&v=5.52&access_token=' + localStorage.getItem('access_token'), options)
                .map(response => {
                console.log(response);
            });
        }
        // private handleError(error: any) {
        //     console.log('ERROR!!!', error);
        // }
}