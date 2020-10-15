import { Component, OnInit } from '@angular/core';
// import { User } from './User';
// import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
// import { from } from 'rxjs';
// import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  user: any;
  // user: User[];
  constructor(
    private authService: AuthenticationService) { }
  // tslint:disable-next-line: variable-name
  search_id: string;
  // tslint:disable-next-line: variable-name
  search_area: string;
  // tslint:disable-next-line: variable-name
  general_search: string;
  // tslint:disable-next-line: variable-name
  search_location: string;
  // tslint:disable-next-line: variable-name
  search_type: string;
  // tslint:disable-next-line: variable-name
  search_demand: string;

  // user: any[] = [
  // tslint:disable-next-line: max-line-length
  //   { Id: '1', Location: 'House # 2, st#9', Area: '1.6 Kanal', Type: 'House', Demand: '17000000', Purpose: 'Sell', Beds: '0', Client: 'Sarmad Mursalin', Agent: 'Name:Nabeel Tariq' },
  // tslint:disable-next-line: max-line-length
  //   { Id: '2', Location: 'House # 3, st#9', Area: '2.6 Kanal', Type: 'Residential plot', Demand: '130000', Purpose: 'Sell', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
  // tslint:disable-next-line: max-line-length
  //   { Id: '3', Location: 'House # 4, st#9', Area: '3.6 Kanal', Type: 'House', Demand: '1500000', Purpose: 'Sell', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
  // tslint:disable-next-line: max-line-length
  //   { Id: '4', Location: 'House # 5, st#9', Area: '1.6 Kanal', Type: 'Apartment', Demand: '2000000', Purpose: 'Rent', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
  // ];
  ngOnInit(): void {
    this.getInventoryList();
  }

  // tslint:disable-next-line: typedef
  getInventoryList() {
    this.authService.getInventory().subscribe(
      (data) => {
        this.user = data.users;
        console.log('Server response: ', data);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  // agentChange(e) {
  //   // console.log("e", this.dataToFilter);
  //   this.Name = e;
  //   // console.log("Name", this.Name);
  //   if (e) {
  //     this.filteredData = this.dataToFilter.filter((d) => {
  //       return d.user_id.user_id == e._id;
  //     });
  //     this.data = this.filteredData;
  //   } else if (!e) {
  //     this.data = this.dataToFilter;
  //   }
  // }

  //////////
  // tslint:disable-next-line: typedef
  myFunction() {
    console.log('calling the function');
    // tslint:disable-next-line: one-variable-per-declaration
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
    console.log('Ending the function');
  }
  //
}
