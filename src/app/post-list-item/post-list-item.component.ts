import { Component, Input, OnInit } from '@angular/core';
import { PostService } from './../services/post.service'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() index: number;

  constructor(private postService : PostService) { }

  ngOnInit() {

  }

  onLoveIt(){
    this.postService.increaseLoveIt(this.index);
  }

  onDontLoveIt(){
    this.postService.decreaseLoveIt(this.index);
  }

  isloveItorNot(){
    if (this.loveIts>0)
      return 'vert';
    else if (this.loveIts<0)
            return 'rouge'
          else 
            return 'blank'
  }

  deletePost(index: number){
    this.postService.deletePost(index);
  }

}
