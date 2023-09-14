import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (res: any) => {
        this.employees = res;
        console.log(this.employees);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
