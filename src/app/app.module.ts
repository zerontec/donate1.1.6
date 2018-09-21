import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import {FirebaseApp} from '@firebase/app-types';
import { FirebaseAuth } from '@firebase/auth-types';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';


// servicios
import { InfoPaginaSevicesService} from './services/info-pagina-sevices.service';
import { AuthService} from './services/auth.service';
import {HeroesService} from './services/heroes.service';

import { HttpClientModule } from '@angular/common/http';
import {environment} from '../environments/environment';
//mensajes 
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NoFoundPageComponent } from './pages/no-found-page/no-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SliderComponent } from './shared/slider/slider.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UbicationsComponent } from './pages/ubications/ubications.component';
import { DesboComponent } from './pages/desbo/desbo.component';
import { DonatesComponent } from './pages/donates/donates.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomeComponent,
    LoginPageComponent,
    NoFoundPageComponent,
    RegisterPageComponent,
    SliderComponent,
    HeroesComponent,
    DetailsComponent,
    ContactComponent,
    UbicationsComponent,
    DesboComponent,
    DonatesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule,
   
   
    AngularFireModule.initializeApp(environment.firebaseConfig),
 
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }, InfoPaginaSevicesService, AuthService,
  FlashMessagesService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
