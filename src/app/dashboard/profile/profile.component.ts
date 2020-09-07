import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  constructor(public router: Router, private route: ActivatedRoute) { }
  // username:string;
  username = this.router.url;
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.email = param.email;
      console.log(this.email);
    });
  }

}
