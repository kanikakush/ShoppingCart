import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private route:Router
  ){}
  canLoad(){
    if(localStorage.getItem('token'))
    {
      //localStorage.removeItem('token');
      return true;
    }else{
      this.route.navigateByUrl('');
      return false;
    }

  }
}
