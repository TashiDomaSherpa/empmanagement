import { Component, OnInit } from '@angular/core';
import { CssSelector } from '@angular/compiler';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  ngOnInit() {
    this.employeeDetail=this.employee.getEmployee();
  }
    employeeDetail=[]
 }

