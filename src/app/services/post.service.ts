import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsSubject = new Subject<any[]>();

  private postListItem = [
    {
      title: 'First post',
      content: 'hfipbceuihbiujriojriojrorijio',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'Deuxième post',
      content: 'hfipbceuihbiujriojriojrorijio',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Dernier post',
      content: 'hfipbceuihbiujriojriojrorijio',
      loveIts: 1,
      created_at: new Date()
    }
  ];
  constructor(private router: Router) { }

  emitListPost() {
    this.postsSubject.next(this.postListItem.slice());
  }

  addNewPost(post: any){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          this.postListItem = this.postListItem.slice().concat(post);
          resolve(true);
        },2000
      );
    });
    
  }

  deletePost(index: number){
    this.postListItem = this.postListItem.slice(0, index).concat(this.postListItem.slice(index + 1, this.postListItem.length))
    this.emitListPost();
  }  

  increaseLoveIt(index: number){
    for (var i = 0; i < this.postListItem.length; i++) {
      if (i === index) {
        this.postListItem[i].loveIts++;
        break;
      }
    }
    this.emitListPost();
    console.log(this.postListItem)
  }

  decreaseLoveIt(index: number){
    for (var i = 0; i < this.postListItem.length; i++) {
      if (i === index) {
        this.postListItem[i].loveIts--;
        break;
      }
    }
    this.emitListPost();
  }
}
