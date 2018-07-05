import { Http, Headers } from '@angular/http';
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
            const headers = new Headers();
            headers.append('Access-Control-Allow-Headers', 'Content-Type');
            headers.append('Access-Control-Allow-Methods', 'GET');
            headers.append('Access-Control-Allow-Origin', '*');
            return this.http.get('https://api.vk.com/method/users.get?user_id=' + localStorage.getItem('user_id') +
                                        '&v=5.52&access_token=' + localStorage.getItem('access_token'), {headers: headers})
                .toPromise()
                .then(res => res.json().data)
                .then(frined => this.frined = frined)
                .catch(this.handleError);
        }
        private handleError(error: any) {
            console.log('ERROR!!!', error);
        }
}