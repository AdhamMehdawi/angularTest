import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { DisplayCommentsComponent } from './display-comments/display-comments.component';
import { ExpoNumberPipe } from './Shared/Pipe/MathExpoNumberPipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPostComponent,
    DisplayCommentsComponent,
    ExpoNumberPipe
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
