import { OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import commentsData from '../../assets/comments.json';

@Component({
  selector: 'app-display-comments',
  templateUrl: './display-comments.component.html',
  styleUrls: ['./display-comments.component.css'],
})
export class DisplayCommentsComponent implements OnInit, OnChanges {
  comments: any[] = commentsData;
  tempComments;
  @Input() post;
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.post) {
      console.log(this.post);
      console.log(this.comments);
      this.tempComments = this.comments.filter(
        (c) => c.postId === this.post.id
      );
    }
  }

  ngOnInit(): void {}

  onClose() {
    this.closeEvent.emit(false);
  }
}
