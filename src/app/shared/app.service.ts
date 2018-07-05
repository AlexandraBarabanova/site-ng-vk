import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { friendItems } from './data';
import { Friend } from './firend';

@Injectable()
export class AppService {
        friendItems: Friend[] = friendItems;
        frined: Array<Object>;
        // public getFriends(): Friend[] {
        //     return this.friendItems;
        // }

        constructor(private http: Http) {}
        public getFriends(): Promise<any> {
            let myHeaders = new Headers({
                'Content-Type': 'application/json',
                'X-MyHeader': 'Hello'
            });
            let options = new RequestOptions({ headers: myHeaders});
            return this.http.get('https://api.vk.com/method/friends.get?user_id=' + localStorage.getItem('user_id') +
                                        '&v=5.52&access_token=' + localStorage.getItem('access_token'), options)
                .toPromise()
                .then(res => res.json().data)
                .then(frined => this.frined = frined)
                .catch(this.handleError);
        }
        private handleError(error: any) {
            console.log('ERROR!!!', error);
        }
}