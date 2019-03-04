import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './api/in-memory-data.service';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsService } from './news.service';
import { NotFoundComponent } from './not-found.component';
import { NewsEditComponent } from './news-edit/news-edit.component';


const appRoutes: Routes = [
  { path: '', component: AllNewsComponent},
  { path: 'details/:id', component: NewsDetailComponent},
  { path: 'edit/:id', component: NewsEditComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    AllNewsComponent,
    NotFoundComponent,
    NewsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)

    // === REMOVE ===
    // , HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
