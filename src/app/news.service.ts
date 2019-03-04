import { Injectable } from '@angular/core';
import { NewsModel } from './news-model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NewsModelCharp } from './news-model-charp';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  private newsUrl = 'http://localhost:60797/api/Values'; // 'api/news'; // /?type=json


  // getNews(): Observable<NewsModel[]> {
  //   return this.httpClient.get<NewsModelCharp[]>(this.newsUrl)
  //     .map(data=>{
  //     return data.map(function(user: NewsModelCharp) {
  //         return {id: user.Id, title: user.Title, body: user.Body, createTime: user.CreateTime};
  //       });

  //   nmch.lift()
  //   return nmch.forEach(n=>new NewsModel() = {n.Id})

  // }

  // convertAllModel(nm: Observable<NewsModelCharp[]>): Observable<NewsModel[]> {
  //   return nm.
  //   // return new Observable<NewsModel[]>();
  // }

  // convertOneModel(item: NewsModelCharp): NewsModel {
  //   const result: NewsModel = { id: item.Id, title: item.Title, body: item.Body, createTime: item.CreateTime};
  //   return result;
  // }


  getNews(): Observable<NewsModel[]> {
    // return this.httpClient.get(this.newsUrl) as Observable<NewsModel[]>;
    return this.httpClient.get<NewsModel[]>(this.newsUrl);
  }

  getOneNews(id: number): Observable<NewsModel> {
    // return this.httpClient.get(this.newsUrl) as Observable<NewsModel[]>;+
    const params = new HttpParams().set('id', id.toString());
    return this.httpClient.get<NewsModel>(this.newsUrl, {params});
  }

  updateNews(one: NewsModel): Observable<NewsModel> { //
    const url = `${this.newsUrl}/${one.id}`;
    return this.httpClient.put<NewsModel>(url, one, httpOptions); // NewsModelCharp
    // JSON.stringify(one)  {Id: one.id, Title: one.title, Body: one.body, CreateTime: one.createTime}


    //   .pipe(
    //   tap(_ => this.log(`updated news id=${one.id}`)),
    //   catchError(this.handleError<NewsModel>('updateNews'))
    // );
  }


  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // // Here may be logging
  // private log(message: string) {
  //   // this.messageService.add(`HeroService: ${message}`);
  // }
}
