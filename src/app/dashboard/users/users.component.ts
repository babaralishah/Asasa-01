// import { Users } from './Users';
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
  users: any;

  search_id: string;
  search_client: string;
  general_search: string;
  search_location: string;
  search_type: string;
  search_demand: string;
  search_area: string;
  data: any;
 
  // addForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  // users: any[] = [
  //   { Id: '1', Client: 'Aftab Nabi', Area: '090078601', Location: 'rwp', Email: 'local@123.com', Access: '5', Status: '0.5 Kanal' },
  //   { Id: '2', Client: 'Khan', Area: '0900786012', Location: 'pesh', Email: 'local@1323.com', Access: '5', Status: '0.5 Kanal' },
  //   { Id: '3', Client: 'Hamid', Area: '0900786013', Location: 'isb', Email: 'user@123.com', Access: '5', Status: '0.5 Kanal' },
  //   { Id: '4', Client: 'Amir', Area: '0900786014', Location: 'murree', Email: 'user@176.com', Access: '5', Status: '0.5 Kanal' },
  //   { Id: '5', Client: 'Taimor', Area: '0900786015', Location: 'isb', Email: 'admin@123.com', Access: '5', Status: '0.5 Kanal' }
  // ];
  // = [];
  // user: Users[];
  user: any ;
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.authService.getUsers().subscribe(
      (data) => {
        this.data = data;
       
        console.log("data----->", this.data);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  // createUser() {
  //   this.authService.createUsers(this.user).subscribe((res) => {
  //   });
  // }
}
