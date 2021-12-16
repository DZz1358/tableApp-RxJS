import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PeopleService } from './../../services/people.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  people = this.peopleService.getPeople();

  displayedColumns: string[] = ['id', 'name', 'Country', 'gender', 'createdAt', 'edit'];


  constructor(
    private peopleService: PeopleService,


  ) { }

  ngOnInit(): void {
  }

  ngOnChanges({ user }: SimpleChanges): void {
    console.log(user);

  }

  deleteUser(id: any) {
    this.peopleService.deleteUser(id).subscribe(data => {
    });
  }


}
