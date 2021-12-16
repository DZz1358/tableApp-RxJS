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

  getIdUser(id: any) {
    return this.http.get(`${environment.apiUrl}/list/${id}`)
  }

  updateUser(user: AddFormComponent, id: any): any {
    return this.http.put(`${environment.apiUrl}/list/${id}`, user);
  }

  deleteUser(id: any) {
    return this.http.delete(`${environment.apiUrl}/list/${id}`);
  }
}


