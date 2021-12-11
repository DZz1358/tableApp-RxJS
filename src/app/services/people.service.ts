import { AddFormComponent } from './../shared/add-form/add-form.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: AddFormComponent): any {
    return this.http.post(`${environment.apiUrl}/list`, user);
  }

  getPeople(): any {
    return this.http.get(`${environment.apiUrl}/list`);
  }

  deleteUser(id: any) {
    const deleteBody = `${environment.apiUrl}/list/${id}`
    return this.http.delete(deleteBody);
  }
}
