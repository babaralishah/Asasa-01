import { Component, OnInit } from '@angular/core';
import { User } from './User';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  // user: User[];
  constructor() { }
  search_id: string;
  search_area: string;
  general_search: string;
  search_location: string;
  search_type: string;
  search_demand: string;

  user: any[] = [
    { Id: '1', Location: 'House # 2, st#9', Area: '1.6 Kanal', Type: 'House', Demand: '17000000', Purpose: 'Sell', Beds: '0', Client: 'Sarmad Mursalin', Agent: 'Name:Nabeel Tariq' },
    { Id: '2', Location: 'House # 3, st#9', Area: '2.6 Kanal', Type: 'Residential plot', Demand: '130000', Purpose: 'Sell', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
    { Id: '3', Location: 'House # 4, st#9', Area: '3.6 Kanal', Type: 'House', Demand: '1500000', Purpose: 'Sell', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
    { Id: '4', Location: 'House # 5, st#9', Area: '1.6 Kanal', Type: 'Apartment', Demand: '2000000', Purpose: 'Rent', Beds: '0', Client: 'Name: Sarmad Mursalin\nPhone:0900-78601', Agent: 'Name:Nabeel Tariq' },
  ];
  ngOnInit(): void {
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
  ///////////////
  query: string = '';
  data = [
    {
      id: 1,
      name: "client A",
      industry: "Tech"

    },
    {
      id: 2,
      name: "client Ab",
      industry: "Tourism"

    },
    {
      id: 3,
      name: "client megha",
      industry: "Hotel"

    },
    {
      id: 4,
      name: "shubham",
      industry: "Retail"

    },
    {
      id: 4,
      name: "rick",
      industry: "IT"

    }
  ]
  ////////// 
  myFunction() {
    console.log('calling the function');
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    console.log('Ending the function');
  }
  // 
}
