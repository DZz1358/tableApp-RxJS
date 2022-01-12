import { TableComponent } from './../table/table.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-info-user',
  templateUrl: './modal-info-user.component.html',
  styleUrls: ['./modal-info-user.component.scss']
})
export class ModalInfoUserComponent implements OnInit {
  receivedRow: any;
  constructor(
    public dialogRef: MatDialogRef<TableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.receivedRow = data;
  }

  ngOnInit(): void {
    // console.log(this.receivedRow.data);

  }

}
