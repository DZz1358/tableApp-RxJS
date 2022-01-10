import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PeopleService } from './../../services/people.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'Country', 'gender', 'createdAt', 'edit'];
  public dataSource = new MatTableDataSource();

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private peopleService: PeopleService,
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
    });
  }

  deleteUser(id: any) {
    this.peopleService.deleteUser(id).subscribe(data => {
      this.getPeople();
      console.log(data);
    });
  }


}

