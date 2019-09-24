import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    }
    employeeDetail=[
      {id: 100,Name: ' TashiDoma ',Dept: ' CSE '},
      {id: 101,Name: 'Cyrus Pradhan',Dept: ' CSE '},
      {id: 102,Name: ' Adarsh ',Dept: ' CSE '}
    ]

  }


