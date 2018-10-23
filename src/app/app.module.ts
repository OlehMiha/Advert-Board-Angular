import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestDirectiveDirective} from './_directive/test-directive.directive';
import {TestPipePipe} from './_pipe/test-pipe.pipe';
import {DatePicerComponent} from './_component/date-picer/date-picer.component';
import {AdvertListComponent} from './_component/advert-list/advert-list.component';
import {HttpService} from "./_service/http.service";

import { HomeComponent } from './_page/home/home.component';

import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule, MatNativeDateModule,
  MatRippleModule,
  MatCardModule
} from '@angular/material';
import { FavoritListComponent } from './_component/favorit-list/favorit-list.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SearchPipe } from './_pipe/search.pipe';

library.add(fas);

const routs: Routes = [
  {path: 'add', component: DatePicerComponent},
  {path: 'about/:id', component: DatePicerComponent, children: [
      {path: 'full', component: DatePicerComponent},
      {path: 'short', component: DatePicerComponent}
    ]},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TestDirectiveDirective,
    TestPipePipe,
    DatePicerComponent,
    AdvertListComponent,
    HomeComponent,
    FavoritListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routs),
    NgbModule,
    FormsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
