import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TweetComponent implements OnInit {

  @Input('likes')
  likes = 0;

  twit = {title: 'Good post', body: 'Photo', likesCount: this.likes};

  constructor() {
  }

  ngOnInit() {
    this.twit.likesCount = this.likes;
  }

  changeLikes(likes) {
    this.likes = likes;
    this.twit.likesCount = likes;
  }
}
