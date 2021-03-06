import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  // tslint:disable-next-line: typedef
  async canActivate() {
    const token = await this.authService.getToken();
    if (!token) {
      this.router.navigateByUrl('/');
    } else {
      return true;
    }
  }
}
