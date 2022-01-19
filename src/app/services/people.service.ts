import { COUNTRY } from './../mocks/country.mock';
import { AddFormComponent } from './../shared/add-form/add-form.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  country = COUNTRY;

  constructor(
    private http: HttpClient,
  ) { }

  addUser(user: AddFormComponent): Observable<any> {
    return this.http.post(`${environment.apiUrl}/list`, user);
  }

  getPeople(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/list`);
  }

  getIdUser(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/list/${id}`)
  }

  updateUser(user: AddFormComponent, id: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/list/${id}`, user);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/list/${id}`);
  }
}


