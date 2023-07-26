import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/models/employee.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL:string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees(): Observable<Employee[]> {
    let direction = this.API_URL + "employees"
    return this.http.get<Employee[]>(direction)
  }

  getEmployeeById(employeeId: number) {
    
  }
}
