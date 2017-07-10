import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'book_details',
  templateUrl: 'book_details.component.html',
  providers: [PostsService]
})
export class book_detailsComponent  {
    header_title: string;
    posts:Post[];

    constructor(private postsService: PostsService){
       this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
    }
    
 }
 interface Post{
    id: number;
    title: string;
    genre:string;
    author:string;
    description: string;
    image_url:string;
    buy_url:string;
}