import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  isLogin() {

    const token = this.authService.getToken();
    // console.log(token);
    return token;
  }
  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
    console.log('\nlogout\n');
    this.router.navigateByUrl('/');
  }

}
