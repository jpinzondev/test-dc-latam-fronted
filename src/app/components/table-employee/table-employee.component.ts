import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.scss']
})
export class TableEmployeeComponent implements OnInit {

  @Input() listDataEmployee:Employee[] | undefined;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

}
