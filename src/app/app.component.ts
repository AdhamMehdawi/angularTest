import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import postsData from '../../src/assets/posts.json';
import appSetting from '../../src/assets/appSettings.json';
import { Router } from '@angular/router';
import { SharedDataService } from './shared-data.service';
import { CookieService } from 'ng2-cookies';

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
    postsData: this.posts,
  };
  testVar = appSetting;
  displayPostInfo;
  displayPostInfo2;
  serviceSubscribe;
  constructor(private router: Router,  private cookie:CookieService , private sharedData: SharedDataService) {
    // this.testType = new Student();
    console.log(this.sum());
 
   cookie.set("test","ali",190);
   //alert(cookie.get("test"));

  }

  ngOnDestroy() {
    this.serviceSubscribe.unsubscribe();
  }
  ngOnChanges() {}
  ngOnInit() {
    // for (let i = 0; i < 10; i++) {
    //   this.students.push(i);
    // }
    this.displayPostInfo2 = this.sharedData.datToShare;
    this.serviceSubscribe = this.sharedData.datToShare.subscribe((c) => {
      this.displayPostInfo = c;
    });
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

  nav() {
    this.router.navigate(['/posts', 1]);
  }
}

interface Student {
  Name: string;
  Age: number;
  Email: string;
  Address: string;
}
