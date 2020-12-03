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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
