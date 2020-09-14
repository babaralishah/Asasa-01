
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  mobileView: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router) {
  }

  // registerresponse: RegisterResponse;
  ngOnInit(): void {
    this.initialize();
    if (window.innerWidth < 600) {
      this.mobileView = true;

    } else if (window.innerWidth > 600) {
      this.mobileView = false;
    }
  }

  initialize() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  registerUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value))

    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
      // this.registerresponse = data;
      const email = this.registerForm.value.email;
      const msg = data.msg;
      const status = data.status;
      // console.log('Status: ' + status);
      if (status) {
        this.registerForm.reset();

        alert(msg);
        this.router.navigate(['signupotp-component', email]);
      }
      else {
        alert(msg);
      }
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
}
