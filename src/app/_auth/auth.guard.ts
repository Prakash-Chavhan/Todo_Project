import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../_services/auth-service.service';
import { UserserviceService } from '../_services/userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userauth: AuthServiceService, private router: Router
    , private userservice: UserserviceService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userauth.getToken() != null) {
      const roles = route.data["roles"];
      // const match = this.userservice.roleMatch(roles);
      const match=true;
      if(match){
          return true;
      }else{
        this.router.navigate(['/forbidden']);
        return false;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }


}
