import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {


  constructor() { }
  // tslint:disable-next-line: variable-name
  search_id: string;
  // tslint:disable-next-line: variable-name
  search_client: string;
  // tslint:disable-next-line: variable-name
  general_search: string;
  // tslint:disable-next-line: variable-name
  search_location: string;
  // tslint:disable-next-line: variable-name
  search_type: string;
  // tslint:disable-next-line: variable-name
  search_demand: string;
  // tslint:disable-next-line: variable-name
  search_area: string;
  users: any[] = [
    { Id: '1', Client: 'Aftab Nabi', Type: 'Buyer', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 4 bed apartment', Assigned_to: 'Azhar adeel', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    // tslint:disable-next-line: max-line-length
    { Id: '2', Client: 'Awais', Type: 'Buyer', Purpose: 'Rent', Prop_type: 'Apartment', Prop_num: '12', Area: '1 Kanal', Location: 'F-6/4', Demand: '450,000', Phone_num: '090078601', Comment: 'Want 4 bed ', Assigned_to: 'Afaq', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    // tslint:disable-next-line: max-line-length
    { Id: '3', Client: 'Usama Gull', Type: 'Seller', Purpose: 'Buy', Prop_type: 'House', Prop_num: '14', Area: '2 Kanal', Location: 'G-15/2', Demand: '150,000', Phone_num: '090078601', Comment: 'Want 3 bed ', Assigned_to: 'Usama', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    { Id: '4', Client: 'Usman', Type: 'Buyer', Purpose: 'Rent', Prop_type: 'Residential Plot', Prop_num: '72', Area: '2 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 1 bed ', Assigned_to: 'Nabeel', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
    { Id: '5', Client: 'Zakria', Type: 'Seller', Purpose: 'Buy', Prop_type: 'Apartment', Prop_num: '5', Area: '0.5 Kanal', Location: 'E-11/4', Demand: '45,000', Phone_num: '090078601', Comment: 'Want 5 bed ', Assigned_to: 'Shaheer', Admin_status: 'Added', Agent_status: 'Assigned', Added_on: 'Aug,15,2020' },
  ];
  ngOnInit(): void {
  }

}
