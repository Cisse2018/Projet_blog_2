import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup; 

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      titlePost: ['', Validators.required],
      contentPost: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.postForm.value;
    var titlePost = formValue['titlePost'];
    var contentPost = formValue['contentPost'];
    var post = {
      title: titlePost,
      content: contentPost,
      loveIts: 0,
      created_at: new Date()
    }
    this.postService.addNewPost(post).then(
      () => {
        alert('Post ajouté avec succès');
        this.postService.emitListPost();
        this.router.navigate(['/posts']);
      }
    );
  }
}
