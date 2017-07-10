import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RouteParams} from '@angular/router';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    constructor(private http: Http,private route: RouteParams){
    
        console.log('PostsService Initialized...');
    }

    getPosts(){
        return this.http.get('/api/books').map(res => res.json());
    }
    getPost(){
        let id = this.route.get('id');
        return this.http.get('/api/books/'+id).map(res => res.json());
    }
    
}