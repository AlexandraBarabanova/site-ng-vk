import { Http } from '@angular/http';
import { Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { friendItems } from './data';
import { Friend } from './firend';

@Injectable()
export class AppService {
        friendItems: Friend[] = friendItems;
        // frined: Array<Object>;
        public getFriends(): Friend[] {
            return this.friendItems;
        }

        // constructor(private http: Http) {}
        // public getFriends(): Promise<any> {
        //     return this.http.get('https://api.vk.com/method/users.get?user_id=90235732&v=5.52&access_token=cefb84567318c602978bdcd1b33d2c80490ad8e746a646b5172e095c7b55a275c1d567b1765aebe01cd6d')
        //         .toPromise()
        //         .then(res => res.json().data)
        //         .then(frined => this.frined = frined)
        //         .catch(this.handleError);
        // }
        // private handleError(error: any) {
        //     console.log('ERROR!!!', error);
        // }
}