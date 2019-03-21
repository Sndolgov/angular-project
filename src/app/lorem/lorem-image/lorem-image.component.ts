import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorem-image',
  templateUrl: './lorem-image.component.html',
  styleUrls: ['./lorem-image.component.css']
})
export class LoremImageComponent {

  private width = 500;
  private height = 500;
  private toggle = false;
  private category = '';

  private image = `http://lorempixel.com/${this.width}/${this.height}/${this.category}`;
  onClick() {
    if (this.toggle) {
      this.image += ' ';
    } else {
      this.image = this.image.trim();
    }
    this.toggle = !this.toggle;
  }
  get urlImage() {
    return this.image;
  }
}
