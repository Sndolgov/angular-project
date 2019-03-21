import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sync-input',
  templateUrl: './sync-input.component.html',
  styleUrls: ['./sync-input.component.css']
})
export class SyncInputComponent {
  text: string;
  lim = 5;
  isIcon = false;

  constructor() {
  }

  // text = 'favorite_border';

  onClick() {
    if (this.text === 'favorite') {
      this.text = 'favorite_border';
    } else {
      this.text = 'favorite';
    }

  }


}
