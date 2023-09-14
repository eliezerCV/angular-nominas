import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = 'http://localhost:5044/api';
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${this.url}/empleados`);
  }

}
