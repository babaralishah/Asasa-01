
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  general_search: string;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }
  user: any;
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.data = data.users;
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
