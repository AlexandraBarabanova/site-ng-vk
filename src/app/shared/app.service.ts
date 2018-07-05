import { Http } from '@angular/http';
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
            return this.http.get('/method/friends.getOnline?v=5.52&access_token=35c9e33d5a4c871e7294da17d0fe100966cae076b11e2c5f0de79883e1f4f76b196d66eb65b14fedf6887')
                .toPromise()
                .then(res => res.json().data)
                .then(frined => this.frined = frined)
                .catch(this.handleError);
        }
        private handleError(error: any) {
            console.log('ERROR!!!', error);
        }
}