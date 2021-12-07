import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../services/people.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  people = this.peopleService.getPeople();

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender', 'edit'];
  constructor(
    private peopleService: PeopleService,

  ) { }

  ngOnInit(): void {

  }

  getMember() {
    // return this.people.getMember();
  }
}
