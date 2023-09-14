import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-table',
  templateUrl: './switch-table.component.html',
  styleUrls: ['./switch-table.component.scss']
})
export class SwitchTableComponent implements OnInit {

  selectedTable = 'employees'

  constructor() { }

  ngOnInit(): void {
  }

  switchTable(table: string) {
    this.selectedTable = table;
  }

}
