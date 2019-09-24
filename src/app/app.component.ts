import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private emp:EmployeeService){}

  emp_id
  emp_name
  emp_dept
  myEmployee={id:1,
    Name:' ',
    Dept:' '}
  addEmployee(){
      this.myEmployee.id=this.emp_id;
      this.myEmployee.Name=this.emp_name;
      this.myEmployee.Dept=this.emp_dept;

      this.emp.setEmployee(this.myEmployee);
  }

}
