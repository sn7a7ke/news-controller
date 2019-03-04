import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { NewsModel } from '../news-model';
import { NewsService } from '../news.service';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  // @Input()
  oneNews: NewsModel; // public
  id: number;

  constructor(
    private newsService: NewsService,
    private activateRoute: ActivatedRoute,
    private location: Location) {
      this.id = activateRoute.snapshot.params.id;
      newsService.getOneNews(this.id).subscribe((on: NewsModel) => this.oneNews = on);
  }
  // constructor() { }

  ngOnInit() {
  }

  onGoBack(): void {
    this.location.back();
  }


  // Кроме параметров маршрута в запросе могут передаваться параметры строки запроса.
  // Например, в запросе http://localhost:3000/item?product=phone&price=200 часть product=phone&price=200
  // будет представлять параметры запроса - product и price.

  //   private routeSubscription: Subscription;
  //   private querySubscription: Subscription;
  //   constructor(private route: ActivatedRoute){

  //       this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  //       this.querySubscription = route.queryParams.subscribe(
  //           (queryParam: any) => {
  //               this.product = queryParam['product'];
  //               this.price = queryParam['price'];
  //           }
  //       );
  //   }

}
