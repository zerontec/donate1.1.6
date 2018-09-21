import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//  componentes
import {HomeComponent} from './pages/home/home.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {DetailsComponent} from './pages/details/details.component';
import {UbicationsComponent } from './pages/ubications/ubications.component';
import {ContactComponent} from './pages/contact/contact.component';
// tslint:disable-next-line:import-spacing
import {DesboComponent}    from   './pages/desbo/desbo.component';
import { NoFoundPageComponent } from './pages/no-found-page/no-found-page.component';
import {GuardGuard} from './guards/guard.guard';
const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'detail', component: DetailsComponent, canActivate: [GuardGuard]},
    {path: 'ubication', component: UbicationsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'panel', component: DesboComponent},
    {path: '**', component: NoFoundPageComponent}

    ];

    @NgModule({
        imports: [
          CommonModule, RouterModule.forRoot(routes)
        ],
        exports: [RouterModule],
        declarations: []
      })
      export class AppRoutingModule { }