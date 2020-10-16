
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  general_search: string;
  data: any;

  constructor(
    // private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    // private router: Router
    ) { }
  user: any;
  ngOnInit(): void {
    this.getUserList();
  }
  // tslint:disable-next-line: typedef
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.data = data.users;
        console.log(this.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
