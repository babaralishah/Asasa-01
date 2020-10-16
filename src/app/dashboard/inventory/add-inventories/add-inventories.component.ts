import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { from } from 'rxjs';
// import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import * as mapboxgl from 'mapbox-gl';
import { HttpErrorResponse } from '@angular/common/http';
// import { MapserviceService } from "../services/mapservice.service";

@Component({
  selector: 'app-add-inventories',
  templateUrl: './add-inventories.component.html',
  styleUrls: ['./add-inventories.component.css']
})
export class AddInventoriesComponent implements OnInit {

  // Requirements for Map on the template, below;
  opacity = 1;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 33.628463;
  lng = 73.087581;
  submitted = false;
  // user: any;
  // cartService: any;
  addinventoryForm: FormGroup;
  // checked: boolean = true;

  // Variables below;
  urls = [];
  optionValue;
  optionValue1;
  fileToUpload: File = null;

  //////////////////////////////////

  constructor(private formBuilder: FormBuilder,
              private authService: AuthenticationService,
    // private router: Router,
              private toastr: ToastrService) { }

  // File Upload Functions below
  // tslint:disable-next-line: typedef
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // uploadFileToActivity() {
  //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // Form Declaration, and Validation Function
  // tslint:disable-next-line: typedef
  formDeclare() {
    this.addinventoryForm = this.formBuilder.group({
form_title: ['']
    });
  }

  // Get value of prop_type variable in template
  // tslint:disable-next-line: typedef
  get Property_type() {
    return this.addinventoryForm.get('property_type');
  }
  // Get value of prop_typename variable in template
  // tslint:disable-next-line: typedef
  get Property_typename() {
    return this.addinventoryForm.get('prop_typename');
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line: typedef
  get f() { return this.addinventoryForm.controls; }

  // ngOnInit
  ngOnInit(): void {
    this.initializemapbox();
    this.formDeclare();
  }
  //   changeValue(value) {
  //     this.checked = !value;
  // }

  // Function to initialize Map; used in template
  // tslint:disable-next-line: typedef
  initializemapbox() {
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoibmFiZWVsc2FsZWVtIiwiYSI6ImNrY3p4MWhrZzBiNWwyd3FtOGx3aTZsbjEifQ.z6RLknl-YnJe2eKqMjPElg',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [73.024955, 33.650753], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
    this.map.addControl(new mapboxgl.FullscreenControl());
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }

  ///////////////////////////////
  // Check whether user pressed 'buy' or 'rent' button
  // tslint:disable-next-line: typedef
  setValue(value: string) {
    this.optionValue1 = value;
  }

  // Submit form to backend service
  // tslint:disable-next-line: typedef
  submitForm() {
    this.submitted = true;    // stop here if form is invalid
    // if (this.addinventoryForm.invalid) {
    //   this.toastr.error('Fields Empty', 'Error', {
    //     timeOut: 5000
    //   });
    //   console.log('Erroneous');
    //   return;
    // }
    // this.addinventoryForm.reset();
    // this.toastr.success('Lead Added', 'Success', {
    //   timeOut: 9000
    // });
    console.log('\n\n', this.addinventoryForm.value, '\n\n');
    this.authService.createInventory(this.addinventoryForm.value).subscribe((res) => {
      this.addinventoryForm.reset();
      this.toastr.success('User Added', 'Success', {
        timeOut: 9000
      });
      console.log('Subscribed data: ', res);
    },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.toastr.error('Fields Empty', 'Error', {
          timeOut: 5000
        });
      });
  }

  // Form upload function
  // tslint:disable-next-line: typedef
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();

        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event: any) => {
          // console.log(event.target.result);
          this.urls.push(event.target.result);
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  // tslint:disable-next-line: typedef
  removeMultipleSelectedFile(index) {
    this.urls.splice(index, 1);
  }

}
