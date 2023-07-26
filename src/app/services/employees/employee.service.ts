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
    return this.http.get<Employee[]>(`${this.API_URL}employees`)
  }

  getEmployeeById(id: number) {
    return this.http.get<Employee>(`${this.API_URL}employees/${id}`)
  }
}
