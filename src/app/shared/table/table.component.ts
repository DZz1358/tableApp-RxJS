import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../services/people.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


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
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
  }
  deleteUser() {
    this.peopleService.deleteUser(this.people.id)
  }
  getUser() {
    return this.http.get(`${environment.apiUrl}/list/id`);
  }
}
