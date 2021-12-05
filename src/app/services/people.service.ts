import { Injectable } from '@angular/core';
import { PEOPLE } from '../mocks/peoples.mock';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people = PEOPLE;


  constructor() { }

  addPeople(member: any): any {
    this.people.push(member);
  }

}
