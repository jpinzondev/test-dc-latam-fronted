import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private service: EmployeeService
  ){}

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(data => {
      console.log(data)
    });
  }
}
