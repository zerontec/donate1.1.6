import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {tap, map, take} from 'rxjs/operators';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';



@Injectable()
export class GuardGuard implements CanActivate {

  constructor (
      private router: Router,
      private afAuth: AngularFireAuth,
      private authServices: AuthService


   ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authServices.afAuth.authState.pipe(
       take(1),
      map(authState => !!authState),
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/login']);
        }
  
      }));
    }
  }
