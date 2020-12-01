import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import postsData from '../../src/assets/posts.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hi, test template </h1>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements OnDestroy, OnChanges, OnInit, AfterViewInit {
  title = 'testApp';
  subTitle: string = 'test subtilte';
  studenAge: number;
  students: number[];
  testType: Student;
  isLogin = true;
  posts = postsData;
   input = {
     titile: this.title,
     postsData: this.posts
   };
  constructor() {
    // this.testType = new Student();
    console.log(this.sum());
  }

  ngOnDestroy() {}
  ngOnChanges() {}
  ngOnInit() {
    // for (let i = 0; i < 10; i++) {
    //   this.students.push(i);
    // }
  }
  ngAfterViewInit() {}

  sum(): number {
    return 10 + 20;
  }

  delete(item) {
    console.log(item);

    let index = this.posts.indexOf(item);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
 
  }

  // tslint:disable-next-line:align
}

interface Student {
  Name: string;
  Age: number;
  Email: string;
  Address: string;
}
