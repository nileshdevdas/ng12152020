import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistinfoComponent } from './artistinfo/artistinfo.component';
import { PublisherComponent } from './publisher/publisher.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { WebseriespageComponent } from './webseriespage/webseriespage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { ReviewspageComponent } from './reviewspage/reviewspage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { OopspageComponent } from './oopspage/oopspage.component';
import { LoginformComponent } from './loginform/loginform.component';
/** the route configuration  */
const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventspageComponent },
  { path: 'movies', component: MoviespageComponent },
  { path: 'web', component: WebseriespageComponent },
  { path: 'reviews', component: ReviewspageComponent },
  { path: 'blog', component: BlogpageComponent },
  { path: 'about', component: AboutuspageComponent },
  { path: '**', component: OopspageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovielistComponent,
    MoviedetailsComponent,
    ArtistsComponent,
    ArtistinfoComponent,
    PublisherComponent,
    SubscriberComponent,
    MoviespageComponent,
    WebseriespageComponent,
    EventspageComponent,
    ReviewspageComponent,
    BlogpageComponent,
    AboutuspageComponent,
    OopspageComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
