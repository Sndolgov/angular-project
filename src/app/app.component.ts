import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-project';
  // urlImage = 'http://lorempixel.com/500/500';
  // isActive = false;
  // tuggleActive() {
  //   this.isActive = !this.isActive;
  //
  // }
  text = 'kuku';
  count = 10;
  category = 'sports';

  onClick() {
    alert(this.text);
  }

  countIncr() {
    this.count++;
  }

  onChange(category) {
    this.category = category;
  }
}
