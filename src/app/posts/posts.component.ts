import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import postsData from '../../../src/assets/posts.json';
import { PostService } from './post.service';
import { PostModel } from './postmodel';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  // providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts: PostModel[];
  //posts: any[] = postsData;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.posts = this.posts.filter((c) => c.id == this.id);
      }
    });
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
    });
    var restult2 = this.postService.getPost().subscribe((arg) => {
      this.posts = arg;
    }, error=> {} );
  }

  display(post: PostModel) {
    this.router.navigate(['/posts/comments', post.id]);
  }
}

// class testObserve{
//   subscriber = [];
//   register(delegate)
//   {
//     this.subscriber.push(delegate);
//   }
//   Notify(){
//    this.subscriber.forEach(element => {
//      element.run();
//    });
//   }
//   Process(){
//     //
//     // some logic
//     console.log();
//     this.Notify();
//   }
// }
