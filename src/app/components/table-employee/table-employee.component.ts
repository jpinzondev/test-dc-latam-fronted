import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.scss']
})
export class TableEmployeeComponent implements OnInit {

  listDataEmployee:Employee[] | undefined;

  constructor(
    private service: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(data => {
      this.listDataEmployee = data
    });
  }

}
