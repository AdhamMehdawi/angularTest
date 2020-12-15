import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
// import { CreateStudentComponent } from './create-student/create-student.component';
import { PostsComponent } from './posts/posts.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
   { path: 'schoolList', component: SchoolComponent },
  {
    path: 'posts',
    children: [
      { path: 'comments/:id', component: CommentsComponent },
      { path: ':id', component: PostsComponent },
      { path: '', component: PostsComponent },
    ],
  },
  {
    path: 'incident',
    loadChildren: () =>
      import('./incident/incident.module').then((m) => m.IncidentModule),
  },
  // {path:'**' , component:notfound }
  // { path: 'posts/:id', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
