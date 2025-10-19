import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @ViewChild('table') table!: any;
  tableForm: any;

  initialRows: number = 5;
  rows: number = this.initialRows;

  initialColumns: number = 5;
  columns: number = this.initialColumns;
  tablewidth: string = 'auto';

  tableRows: FormControl = new FormControl(this.initialRows);
  tableColumns: FormControl = new FormControl(this.initialColumns);

  extended: boolean = false;
  isContentVisible: boolean = false;

  ngOnInit(): void {
    this.tableForm = new FormGroup({
      rows: new FormControl(this.initialRows),
      columns: new FormControl(this.initialColumns, [Validators.required]),
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.tableWidth(), 100);
  }

  getRows() {
    const arr = new Array();
    for (let i = 0; i < this.rows; i++) {
      arr.push('x');
    }
    return arr;
  }

  getColumns() {
    const arr = new Array();
    for (let i = 0; i < this.columns; i++) {
      arr.push('x');
    }
    return arr;
  }

  changeTable() {
    this.rows = this.tableForm.get('rows').value;
    this.columns = this.tableForm.get('columns').value;
    this.tableRows.setValue(this.rows);
    this.tableColumns.setValue(this.columns);
    this.setTable();
  }

  changeTableAgain() {
    this.rows = this.tableRows.value;
    this.columns = this.tableColumns.value;
    this.tableForm.get('rows').setValue(this.rows);
    this.tableForm.get('columns').setValue(this.columns);
    
    this.setTable();
  }

  setTable() {
    this.tableWidth();
    this.getRows();
    this.getColumns();
  }

  reset() {
    this.tableForm.reset({
      rows: this.initialRows,
      columns: this.initialColumns,
    });
    this.tableRows.setValue(this.initialRows);
    this.tableColumns.setValue(this.initialColumns);
    this.rows = this.initialRows;
    this.columns = this.initialColumns;
    this.setTable();
  }

  toggleextend() {
    this.extended = !this.extended;
    this.tableWidth();
  }

  tableWidth() {
    const x = this.table.nativeElement.querySelector('td');
    const width =
      x.offsetWidth * this.tableForm.get('columns').value + 10 + 'px';
    if (this.extended) {
      this.tablewidth = width;
    } else {
      this.tablewidth = 'auto';
    }
  }

  toggleContentVisible() {
    this.isContentVisible = !this.isContentVisible;
  }
}
