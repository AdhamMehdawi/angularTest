import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { DisplayCommentsComponent } from './display-comments/display-comments.component';
import { ExpoNumberPipe } from './Shared/Pipe/MathExpoNumberPipe';
import { PostsComponent } from './posts/posts.component';
import { MenueComponent } from './menue/menue.component';
import { PostService } from './posts/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { GlobalInterceptor } from './Shared/globalIntersiptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolComponent } from './school/school.component';
import {TableModule} from 'primeng/table';
import { CookieService } from 'ng2-cookies/cookie';
// import { CreateStudentComponent } from './create-student/create-student.component';

// import { Routes, RouterModule } from '@angular/router';
// const routes: Routes = [{ path: 'post', component: DisplayPostComponent }];

@NgModule({
  declarations: [
    AppComponent,
    DisplayPostComponent,
    DisplayCommentsComponent,
    ExpoNumberPipe,
    PostsComponent,
    MenueComponent,
    CommentsComponent,
    SchoolComponent,
    // CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
    // RouterModule.forRoot(routes),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: GlobalInterceptor,
    //   multi: true
    // }
    CookieService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
