import { Component, OnInit } from '@angular/core';
import { NewsModel } from '../news-model';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  allNews: NewsModel[];
  public page: number;
  public collectionSize: number;

  constructor(private newsService: NewsService) {
    this.page = 1;
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(an => {
      this.allNews = an;
      this.collectionSize = an.length;
    });
    // this.allNews = this.newsService.getNews();
  }

  onPageChanged(pageNumber: number) {
    console.log('current page: ' + pageNumber);
  }

  add(): void {
    console.log('pressed button <add>');
  }

}
