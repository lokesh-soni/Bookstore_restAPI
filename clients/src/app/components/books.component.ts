import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'books',
  templateUrl: 'books.component.html',
  providers: [PostsService]
})
export class booksComponent  {
    header_title: string;
    posts:Post[];

    constructor(private postsService: PostsService){
      this.header_title = "This is an about page!";
      this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
  }
  
    
 }
 interface Post{
    id: number;
    title: string;
    description: string;
    image_url:string;
}