import { Injectable } from '@angular/core';
import { NewsModel } from './news-model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NewsModelCharp } from './news-model-charp';

// let httpOptions: {[header: string]: string};
const myHeaders = new HttpHeaders(
  { 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Credentials': 'true'
  });
// let httpOptions = {
//   headers: myHeaders

//     // ,
//     //   'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
//     //   'Access-Control-Allow-Credentials': 'true'
// };
// ,{ 'Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS' }

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    // this.headers = new HttpHeaders(
    //   { 'Content-Type': 'application/json' });
    // this.headers.set('Access-Control-Allow-Methods', 'GET');
    // httpOptions = {headers: this.headers};

  }

  private newsUrl = 'https://localhost:44377/api/values'; // 'api/news'; // /?type=json //60797

  getNews(): Observable<NewsModel[]> {
    // return this.httpClient.get(this.newsUrl) as Observable<NewsModel[]>;
    return this.httpClient.get<NewsModel[]>(this.newsUrl, {headers: myHeaders});
  }

  getOneNews(id: number): Observable<NewsModel> {
    // return this.httpClient.get(this.newsUrl) as Observable<NewsModel[]>;+
    const url = `${this.newsUrl}/${id}`;
    // const params = new HttpParams().set('id', id.toString());
    return this.httpClient.get<NewsModel>(url, {headers: myHeaders}); // , params
  }

  updateNews(one: NewsModel): Observable<NewsModel> { //
    const url = `${this.newsUrl}/${one.id}`;
    return this.httpClient.put<NewsModel>(url, one, {headers: myHeaders}); // NewsModelCharp
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
