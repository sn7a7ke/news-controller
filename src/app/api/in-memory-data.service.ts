import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NewsModel } from '../news-model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const news: NewsModel[] = [
      {id: 1, title: 'First', body: 'First body', createTime: 'the day before yesterday'},
      {id: 2, title: 'Second', body: 'Second body', createTime: 'yesterday'},
      {id: 3, title: 'Third', body: 'Third body', createTime: 'right now'}
    ];
    return { news };
  }

  constructor() { }
}
