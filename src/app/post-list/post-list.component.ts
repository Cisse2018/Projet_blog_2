import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostListItemComponent } from './../post-list-item/post-list-item.component';
import { PostService } from './../services/post.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private postsListItem: any[];
  postSubscription: Subscription;
  
  constructor(private postService: PostService){

  }

  ngOnInit(){
    this.postSubscription = this.postService.postsSubject.subscribe(
      (postsListItem: any[]) => {
        this.postsListItem = postsListItem;
      }
    );
    this.postService.emitListPost();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
