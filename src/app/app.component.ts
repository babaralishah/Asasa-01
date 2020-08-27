// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShown:boolean=false;
  title = 'asasa';
  loginForm: FormGroup; // Instance of Form group that will get form data from user end (i.e; login.html)
  // registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    public formBuilder: FormBuilder, // Creating an instance of Formbuilder
    public authService: AuthenticationService, // Instance of Authentication services created in front end
    public router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get email() {
    return this.loginForm.get('email')
  }
  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // console.log('user login data: ',this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(data => {

      console.log(data);
      const status = data.status;
      const msg:string = data.msg;
      console.log("Status: " + status);
      console.log("Message: " + msg);
      if (status) {

      } else {
        alert('Invalid email or password!');
      }
    });
  }
  // getting input labels values from user end (login.html)
  get f() { return this.loginForm.controls; }
}
