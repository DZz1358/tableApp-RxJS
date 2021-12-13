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

  deleteUser(id: any) {
    console.log(id);

    this.peopleService.deleteUser(id).subscribe(data => {
      window.location.reload();
    });
  }

  updateUser(id: any) {
    return this.http.get(`${environment.apiUrl}/list/${id}`).subscribe(data => {

      console.log(data);
    });
  }

}
