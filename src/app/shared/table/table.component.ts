import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PeopleService } from './../../services/people.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoUserComponent } from '../modal-info-user/modal-info-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'country', 'gender', 'createdAt', 'edit'];
  public dataSource = new MatTableDataSource();

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  q: any;


  constructor(
    private peopleService: PeopleService,
    private dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.getPeople();

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      // console.log(this.dataSource.data);

    });
  }

  deleteUser(id: any) {
    this.peopleService.deleteUser(id).subscribe(data => {
      this.getPeople();
      console.log(data);
    });
  }

  openDialog() {
    // let q = this.dataSource.data;
    // console.log(q);

    const dialogRef = this.dialog.open(ModalInfoUserComponent, {
      data: {
        name: 'Adolf',

        // name: this.q.name
      }
    });

  }

}

