import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';


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
    UbicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
