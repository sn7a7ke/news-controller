import { Component, Input } from '@angular/core';
import { NewsModel } from './news-model';
import { NewsService } from './news.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-controller !!!';
  constructor() { }

  // // @Input()
  // id: number;
  // on: NewsModel; // = {id: 1, title: 'First', body: 'First body', createTime: 'right now'};
  // constructor(private newsService: NewsService) {
  //   this.id = 1;
  //   newsService.getOneNews(this.id).subscribe(on => this.on = on);
  // }
}
