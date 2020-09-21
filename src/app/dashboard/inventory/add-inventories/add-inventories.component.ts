import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from "ngx-toastr";
import * as mapboxgl from 'mapbox-gl';
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
  optionValue;
  optionValue1;;
  fileToUpload: File = null;

  //////////////////////////////////

  constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService) { }

    // File Upload Functions below
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
  formDeclare() {
    this.addinventoryForm = this.formBuilder.group({
      prop_type:[''],
      prop_typename:[''],
      prop_purpose:[''],
      city: ['', Validators.required],
      location: ['', Validators.required],
      sub_location: ['', Validators.required],
      id: ['', Validators.required],
      prop_no: ['', Validators.required],
      street_no: ['', Validators.required],
      demand: ['', Validators.required],
      land_area: ['', Validators.required],
      built_year: ['', Validators.required],
      view: ['', Validators.required],
      park_space: ['', Validators.required],
      other_housefeature: ['', Validators.required],
      other_businessfeature: ['', Validators.required],
      bedroom: ['', Validators.required],
      bathroom: ['', Validators.required],
      guestroom: ['', Validators.required],
      tvlounge: ['', Validators.required],
      diningroom: ['', Validators.required],
      studyroom: ['', Validators.required],
      servantroom: ['', Validators.required],
      kitchen: ['', Validators.required],
      storeroom: ['', Validators.required],
      floor_location: ['', Validators.required],
      otherroom: ['', Validators.required],
      nearby_school: ['', Validators.required],
      nearby_hospital: ['', Validators.required],
      nearby_shoppingmall: ['', Validators.required],
      nearby_restaurant: ['', Validators.required],
      distance_airport: ['', Validators.required],
      nearby_transport: ['', Validators.required],
      nearby_other: ['', Validators.required],
      comment: ['', Validators.required],
      prop_title: ['', Validators.required],
      video_link: ['', Validators.required],
      link_360: ['', Validators.required],
      other_plotfeature: ['', Validators.required],
      total_plotprice: ['', Validators.required],
      paid_amount: ['', Validators.required],
      profit: ['', Validators.required],
      current_price: ['', Validators.required]
    });
  }

  // Get value of prop_type variable in template
  get Prop_type() {
    return this.addinventoryForm.get('prop_type')
  }
  // Get value of prop_typename variable in template
  get Prop_typename() {
    return this.addinventoryForm.get('prop_typename')
  }

  // convenience getter for easy access to form fields
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
  getValue(value:string)
  {
    this.optionValue1 = value;
  }

  // Submit form to backend service
  submitForm() {
    this.submitted = true;    // stop here if form is invalid
    if (this.addinventoryForm.invalid) {
      this.toastr.error('Fields Empty', 'Error', {
        timeOut: 5000
      });
      console.log('Erroneous')
      return;
    }
    this.addinventoryForm.reset();
    this.toastr.success('Lead Added', 'Success', {
      timeOut: 9000
    });
  }

}
