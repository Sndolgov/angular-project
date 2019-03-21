import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-lorem-image',
  templateUrl: './lorem-image.component.html',
  styleUrls: ['./lorem-image.component.css']
})
export class LoremImageComponent {

  @Input('image-width')
  private width = 500;
  @Input('image-height')
  private height = 500;
  @Output()
  change = new EventEmitter();
  @Input()
  private category = '';

  private categories = ['abstract', 'people', 'sports', 'animals', 'technics', 'nightlife', 'cats'];

  index = 0;

  private image = `http://lorempixel.com/`;

  onClick() {
    this.index++;
    if (this.index === this.categories.length) {
      this.index = 0;
    }
    this.category = this.categories[this.index];
    this.change.emit(this.category);
  }

  get urlImage() {
    return this.image;
  }
}
