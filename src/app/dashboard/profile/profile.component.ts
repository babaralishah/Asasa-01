import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  url: string | ArrayBuffer;
  constructor(public router: Router, private route: ActivatedRoute) { }
  // username:string;
  username = this.router.url;
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.email = param.email;
      // console.log(this.email);
    });
  }
  // tslint:disable-next-line: typedef
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

}
