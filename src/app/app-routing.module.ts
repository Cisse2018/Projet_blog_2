import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component'
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new-post', component: NewPostComponent},
  {path: '', component: PostListComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
