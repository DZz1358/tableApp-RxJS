import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PEOPLE } from '../mocks/peoples.mock';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people = PEOPLE;


  constructor(
    private http: HttpClient,
  ) { }

  addPeople(member: any): any {
    this.people.push(member);
  }
  getPeople(): any {
    return this.http.get(`${environment.apiUrl}/list`);
  }

}
