import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {DetailsComponent} from './pages/details/details.component';
import {UbicationsComponent } from './pages/ubications/ubications.component';
import {ContactComponent} from './pages/contact/contact.component';

 const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'detail', component: DetailsComponent},
    {path: 'ubication', component: UbicationsComponent},
    {path: 'contact', component: ContactComponent},

    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }