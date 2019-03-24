import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-nav-view',
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.css']
})
export class NavViewComponent implements OnInit {
  viewMode = 'c1';

  @Input()
  tab4Name: string;
  @Input()
  tab3Name: string;
  @Input()
  tab2Name: string;
  @Input()
  tab1Name: string;

  constructor() {
  }

  ngOnInit() {
  }

}
