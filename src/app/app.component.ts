import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dc-latam-frontend';
  listDataEmployee: Employee[] = [];

  constructor(
    private service: EmployeeService,
  ) {
    this.getData(0);
  }

  getData(id: number) {
    
    if (id) {
      this.service.getEmployeeById(id).subscribe({
        next: data => {
          this.listDataEmployee = [data]
        }, 
        error: ()=> {
          this.listDataEmployee = []
        }
      });  

    } else {
      this.service.getAllEmployees().subscribe(data => {
        this.listDataEmployee = data
      });
    }
  }
}
