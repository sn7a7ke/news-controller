import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../news-model';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  oneNews: NewsModel; // public
  id: number;

  constructor(
    private newsService: NewsService,
    private activateRoute: ActivatedRoute,
    private location: Location) {
      this.id = activateRoute.snapshot.params.id;
      newsService.getOneNews(this.id).subscribe((on: NewsModel) => this.oneNews = on);
  }

  ngOnInit() {
  }

  onSave(): void {
    this.newsService.updateNews(this.oneNews)
      .subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.location.back();
  }

}
