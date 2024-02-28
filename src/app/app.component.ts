import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'list-app';

  public list: any = [];

  constructor(private service: AppService) {
    this.service.listItems.subscribe(items => {this.list = items; console.log(this.list)});
  }

  ngOnInit() {
    this.service.getListItem(10);
  }
}
