import { Component } from '@angular/core';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './services/post.service'
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-blog';

  constructor(private postService: PostService ) { }

  ngOnInit() {
  }

}
