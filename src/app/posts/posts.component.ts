import { Component } from '@angular/core';
import { IPosts } from '../models';
import { PostService } from '../shared/services/posts-services';
import { Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css'],
  providers: [PostService]
})
export class PostsComponent {

  public postContent: string;

  public posts: IPosts

  constructor(private postService: PostService) { 
    postService.getPosts()
    .then(postReports=>this.posts=postReports);
    
  }
}
