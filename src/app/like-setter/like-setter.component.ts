import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-like-setter',
  templateUrl: './like-setter.component.html',
  styleUrls: ['./like-setter.component.css']
})
export class LikeSetterComponent {

  constructor() {
  }

  @Input('likes')
  likes = 0;

  @Output()
  change = new EventEmitter();
  icons = ['favorite_border', 'favorite'];
  text = this.icons [0];
  isLike = false;

  onClick() {
    this.text = this.isLike ? this.icons[0] : this.icons[1];
    this.isLike = !this.isLike;
    this.isLike ? this.likes++ : this.likes--;
    this.change.emit(this.likes);
  }

}
