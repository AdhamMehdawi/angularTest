import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import postsData from '../../../src/assets/posts.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit {
  posts: any[] = postsData;
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id){ this.posts = this.posts.filter((c) => c.id == this.id); }
    });
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
    });
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
