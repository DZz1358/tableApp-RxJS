import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PeopleService } from './../../services/people.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  people = this.peopleService.getPeople();

  displayedColumns: string[] = ['id', 'name', 'Country', 'gender', 'createdAt', 'edit'];


  constructor(
    private peopleService: PeopleService,
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  deleteUser(id: any) {
    this.peopleService.deleteUser(id).subscribe(data => {
    });
  }


}
