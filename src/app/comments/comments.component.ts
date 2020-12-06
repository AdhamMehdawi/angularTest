import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostService } from './../posts/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass'],
})
export class CommentsComponent implements OnInit {
  postId: number = 0;
  commentsList: any[];
  commentsList$: Observable<any[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.postId = params['id'];
    //   //load comments related to post id
    //   this.postService.getCommnets(this.postId).subscribe((c) => {
    //     this.commentsList = c;
    //     console.log(c);
    //   });
    // });

  }

  ngOnInit(): void {
  this.commentsList$ =   this.activatedRoute.params.pipe(
    switchMap((params) => {
      this.postId = params['id'];
      return this.postService.getCommnets(this.postId);
    })
  );
 
  }
}
