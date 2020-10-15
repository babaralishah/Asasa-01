
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
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
    public router: Router,
    private toastr: ToastrService) {
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

  // tslint:disable-next-line: typedef
  initialize() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // tslint:disable-next-line: typedef
  registerUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('Erroneous');
      this.toastr.error('Can not Registered', 'Error', {
        timeOut: 5000
      });
      return;
    }

    // alert('SUCCESS!! :-)\n' + JSON.stringify(this.registerForm.value));


    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe(
      (data) => {
      console.log(data);
      // this.registerresponse = data;
      const email = this.registerForm.value.email;
      const msg = data.message;
      // const status = data.status;
      // this.registerForm.reset();
      if (msg !== 'This email has been registered already') {
      this.toastr.success(msg, 'Success', {
          timeOut: 5000
        });
      this.router.navigate(['profile', email]);
      }
      else
{
     this.toastr.error(msg, 'Error', {
      timeOut: 5000
    });

}
    });
    // (error)=>{
    //   console.log('Error')
    //   this.toastr.error(error, 'Error', {
    //     timeOut: 5000
    //   });
    // });


  }
  // convenience getter for easy access to form fields
  // tslint:disable-next-line: typedef
  get f() { return this.registerForm.controls; }
}
