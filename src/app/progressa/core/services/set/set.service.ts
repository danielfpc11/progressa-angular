import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Set, SET_URL } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  constructor(private http: HttpClient) {
  }

  getSet(): Observable<any> {
    return this.http.get<any>(
      `${SET_URL}/all`,
      {observe: 'response'}
    );
  }


  getSetById(id: number): Observable<Set> {
    return this.http.get<Set>(
      `${SET_URL}/get/${id}`,
      {observe: 'body'}
    );
  }

  createSet(Set: Set): Observable<Set> {
    return this.http.post<Set>(
      `${SET_URL}/new`,
      Set, {observe: 'body'}
    );
  }

  updateSet(id: number, Set: Set): Observable<Set> {
    return this.http.put<Set>(
      `${SET_URL}/update/${id}`,
      Set,
      {observe: 'body'}
    );
  }

  deleteSet(id: number): Observable<Set> {
    return this.http.delete<Set>(
      `${SET_URL}/delete/${id}`,
      {observe: 'body'}
    );
  }

}
