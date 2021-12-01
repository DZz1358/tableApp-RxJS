import { Component, OnInit } from '@angular/core';
import { PEOPLE } from 'src/app/mocks/peoples.mock';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  people = PEOPLE;
  // dataSource = PEOPLE;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender'];
  constructor() { }

  ngOnInit(): void {
  }

}
