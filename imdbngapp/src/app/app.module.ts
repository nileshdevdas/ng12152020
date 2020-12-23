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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthGuard } from './auth.guard';
import { LoggerInterceptor } from './logger.interceptor';
import { CcPipe } from './cc.pipe';
import { PopoutDirective } from './popout.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DemosModule } from './demos/demos.module';
import { WidgetsModule } from './widgets/widgets.module';
/** the route configuration  */
const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventspageComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviespageComponent, canActivate: [AuthGuard] },
  { path: 'web', component: WebseriespageComponent, canActivate: [AuthGuard] },
  { path: 'reviews', component: ReviewspageComponent, canActivate: [AuthGuard] },
  { path: 'blog', component: BlogpageComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutuspageComponent, canActivate: [AuthGuard] },
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
    LoginformComponent,
    CcPipe,
    PopoutDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    NgxExtendedPdfViewerModule,
    DemosModule,
    WidgetsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
