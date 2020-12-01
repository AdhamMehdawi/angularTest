import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.sass'],
})
export class DisplayPostComponent implements OnInit {
  @Input() posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[] = [];
  dateFormat = 'fullDate';
  selectedPost;
  displaycomments = false;
  @Input() tableTile: string;
  @Output() deleteRequest = new EventEmitter<any>();
  dayDate = new Date(2020, 12, 1);
  // [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     body:
  //       'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: 'qui est esse',
  //     body:
  //       'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  //     body:
  //       'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  //   },
  // ];

  cols = [
    {
      key: 'id',
      display: 'Serial',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete(event, item) {
    // console.log(event);
    //console.log(item);
    // let index = this.posts.indexOf(item);
    // if (index !== -1) {
    //   this.posts.splice(index, 1);
    // }

    this.deleteRequest.emit(item);
  }

  display(post) {
    this.displaycomments = true;
    this.selectedPost = post;
  }

  close(event) {
    console.log(event);
    this.displaycomments = event;
  }

  format(dateFormat) {
    this.dateFormat = dateFormat;
  }
}
