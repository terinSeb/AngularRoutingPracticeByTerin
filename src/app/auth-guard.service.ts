import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { promise } from "selenium-webdriver";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private authservice:AuthService, private router:Router){}
  canActivate(router:ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
return this.authservice.isAuthenticated()
.then(
  (authenticated:Boolean) =>{
    if(authenticated){
      return true;
    }
    else{
this.router.navigate(['/']);
    }
  }
)
    }
    canActivateChild(router:ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(router,state);
      }
}