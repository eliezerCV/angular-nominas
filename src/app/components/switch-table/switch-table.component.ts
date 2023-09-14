import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch-table',
  templateUrl: './switch-table.component.html',
  styleUrls: ['./switch-table.component.scss']
})
export class SwitchTableComponent implements OnInit {

  @Output() onSwitchTable = new EventEmitter<string>();

  selectedTable = 'employees'

  constructor() { }

  ngOnInit(): void {
  }

  switchTable(table: string) {
    this.selectedTable = table;
    this.onSwitchTable.emit(table);
  }

}
