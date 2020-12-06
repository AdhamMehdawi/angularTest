import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'posts',  children: [ 
    { path: 'comments/:id', component: CommentsComponent },
    { path: ':id', component: PostsComponent }, 
    { path: '', component: PostsComponent }] },
   // {path:'**' , component:notfound }
  // { path: 'posts/:id', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
