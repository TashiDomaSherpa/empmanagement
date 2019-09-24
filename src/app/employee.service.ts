import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService{
    employeeDetail=[
        {id: 100,Name:'TashiDoma',Dept:'CSE'},
        {id: 101,Name:'Cyrus Pradhan',Dept:'CSE'},
        {id: 102,Name:'Adarsh',Dept:'CSE'}
      ]
getEmployee() {
    return this.employeeDetail;
    }

setEmployee(emp){
    this.employeeDetail.push(emp);
    }
}