import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import postsData from '../../../src/assets/posts.json';
import { PostService } from './post.service';
import { PostModel } from './postmodel';
import { SharedDataService } from './../shared-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  // providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts: PostModel[];
  tempPosts: PostModel[];
  //posts: any[] = postsData;
  categories;
  id: number;
  searchValue: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private sharedData: SharedDataService
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
    var restult2 = this.postService.getPost().subscribe(
      (arg) => {
        this.posts = arg;
        this.tempPosts = this.posts;
      },
      (error) => {}
    );


    this.sharedData.getLookupsByType([1]).subscribe(res=>{
      console.log(res);
      this.categories = res.result;
    });


  }

  display(post: PostModel) {
    this.router.navigate(['/posts/comments', post.id]);
  }

  search() {
    // this.postService.searchPosts(this.searchValue).subscribe((res) => {
    //   this.tempPosts = res;
    // });

    this.tempPosts = this.posts.filter(
      (c) =>
        c.body.includes(this.searchValue) ||
        c.title.includes(this.searchValue) ||
        c.id == +this.searchValue ||
        c.userId == +this.searchValue
    );
  }

  shared(post: PostModel) {
    this.sharedData.changeDataValues({ id: post.id, name: post.title });
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
