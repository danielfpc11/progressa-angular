import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EXERCISE_SET_URL, ExerciseSet } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSetService {

  constructor(protected http: HttpClient) {
  }

  getExerciseSets(): Observable<ExerciseSet[]> {
    return this.http
               .get<ExerciseSet[]>(`${EXERCISE_SET_URL}/all`, { observe: 'body' });
  }

  getExerciseSetById(id: number): Observable<ExerciseSet> {
    return this.http
               .get<ExerciseSet>(`${EXERCISE_SET_URL}/get/${id}`, { observe: 'body' });
  }

  createExerciseSet(exerciseSet: ExerciseSet): Observable<ExerciseSet> {
    return this.http
               .post<ExerciseSet>(`${EXERCISE_SET_URL}/new`, exerciseSet, { observe: 'body' });
  }

  updateExerciseSet(id: number, exerciseSet: ExerciseSet): Observable<ExerciseSet> {
    return this.http
               .put<ExerciseSet>(`${EXERCISE_SET_URL}/update/${id}`, exerciseSet, { observe: 'body' });
  }

  deleteExerciseSet(id: number): Observable<void> {
    return this.http
               .delete<void>(`${EXERCISE_SET_URL}/delete/${id}`, { observe: 'body' });
  }

}
