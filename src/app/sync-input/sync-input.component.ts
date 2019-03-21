import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync-input',
  templateUrl: './sync-input.component.html',
  styleUrls: ['./sync-input.component.css']
})
export class SyncInputComponent implements OnInit {
text: string;
  lim = 5;
  isIcon = false;
  constructor() { }

  ngOnInit() {
  }

}
