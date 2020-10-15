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
      // prop_type: [''],
      prop_typename: [''],
      // prop_purpose: [''],
      // city: ['', Validators.required],
      // location: ['', Validators.required],
      // sub_location: ['', Validators.required],
      // id: ['', Validators.required],
      // prop_no: ['', Validators.required],
      // street_no: ['', Validators.required],
      // demand: ['', Validators.required],
      // land_area: ['', Validators.required],
      // built_year: ['', Validators.required],
      // view: ['', Validators.required],
      // park_space: ['', Validators.required],
      // other_housefeature: ['', Validators.required],
      // other_businessfeature: ['', Validators.required],
      // bedroom: ['', Validators.required],
      // bathroom: ['', Validators.required],
      // guestroom: ['', Validators.required],
      // tvlounge: ['', Validators.required],
      // diningroom: ['', Validators.required],
      // studyroom: ['', Validators.required],
      // servantroom: ['', Validators.required],
      // kitchen: ['', Validators.required],
      // storeroom: ['', Validators.required],
      // floor_location: ['', Validators.required],
      // otherroom: ['', Validators.required],
      // nearby_school: ['', Validators.required],
      // nearby_hospital: ['', Validators.required],
      // nearby_shoppingmall: ['', Validators.required],
      // nearby_restaurant: ['', Validators.required],
      // distance_airport: ['', Validators.required],
      // nearby_transport: ['', Validators.required],
      // nearby_other: ['', Validators.required],
      // comment: ['', Validators.required],
      // prop_title: ['', Validators.required],
      // video_link: ['', Validators.required],
      // link_360: ['', Validators.required],
      // other_plotfeature: ['', Validators.required],
      // total_plotprice: ['', Validators.required],
      // paid_amount: ['', Validators.required],
      // profit: ['', Validators.required],
      // current_price: ['', Validators.required]

      //////////////////////////////////////////////

        userId: { type: String },
        // _id: { type: String, default: shortid.generate },
        agent: {
        id: { type: String },
        name: { type: String },
        contact: { type: String },
        email: { type: String },
        password: { type: String },
        },
        property_type: { type: String },
        property_subType: { type: String },
        property_number: { type: Number },
        demand: { type: Number },
        land_area: { type: String },
        land_unit: { type: String },
        // city: {
        // city_name: { type: String },
        // lat: { type: Number },
        // lng: { type: Number },
        // image: { type: String },
        // },
        house_features: {
        house_luxury: { type: Array },
        house_build_year: { type: Number },
        house_view: { type: String },
        house_parking_space: { type: String },
        house_other_feature: { type: String },
        rooms: {
        room_luxuries: { type: Array },
        beds: { type: Number },
        baths: { type: Number },
        guest_room: { type: Number },
        tv_lounge: { type: Number },
        dinning_room: { type: Number },
        study_room: { type: Number },
        servant_quaters: { type: Number },
        kitchens: { type: Number },
        store_rooms: { type: Number },
        other_rooms: { type: Number },
        },
        business_communication: { type: Array },
        },
        plot_features: {
        plot_details: { type: Array },
        total_price: { type: Number },
        paid_amount: { type: Number },
        profit: { type: Number },
        current_price: { type: Number },
        },
        commercialFeatures: {
        commercial_details: { type: Array },
        com_build_year: { type: Number },
        com_view: { type: String },
        com_parking_space: { type: String },
        com_floor_in_building: { type: Number },
        com_elevators: { type: String },
        business_communication: { type: Array },
        },
        nearbyLocations: {
        school: { type: String },
        hospital: { type: String },
        mall: { type: String },
        restuarant: { type: String },
        distancefromAirport: { type: Number },
        nearbyPublicTransport: { type: String },
        otherplaces: { type: String },
        },
        markerlocation: {
        marker_location: { type: String },
        marker_lat: { type: Number },
        marker_lng: { type: Number },
        marker_image: { type: String },
        },
        type: {
        type: String,
        },
        property_images: { type: Array },
        isDeleted: { type: Boolean, default: false },
        deleteInventoryReason: {
        type: String,
        },

      // ///////////////////////////////////////////

      lead: [''],
      inventory: [''],
      both: [''],
      // property_type: [''],
      // property_subType: [''],
      prop_purpose: [''],
      city: [''],
      location: [''],
      sub_location: [''],
      // userId: [''],
      prop_no: [''],
      street_no: [''],
      // demand: [''],
      // land_area: [''],
      built_year: [''],
      view: [''],
      park_space: [''],
      other_housefeature: [''],
      other_businessfeature: [''],
      bedroom: [''],
      bathroom: [''],
      guestroom: [''],
      tvlounge: [''],
      diningroom: [''],
      studyroom: [''],
      servantroom: [''],
      kitchen: [''],
      storeroom: [''],
      floor_location: [''],
      otherroom: [''],
      nearby_school: [''],
      nearby_hospital: [''],
      nearby_shoppingmall: [''],
      nearby_restaurant: [''],
      distance_airport: [''],
      nearby_transport: [''],
      nearby_other: [''],
      comment: [''],
      prop_title: [''],
      video_link: [''],
      link_360: [''],
      other_plotfeature: [''],
      total_plotprice: [''],
      paid_amount: [''],
      profit: [''],
      current_price: ['']
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
