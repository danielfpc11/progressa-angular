import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Exercise, EXERCISE_URL } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(protected http: HttpClient) {
  }

  getExercises(): Observable<Exercise[]> {
    return this.http
               .get<Exercise[]>(`${EXERCISE_URL}/all`, { observe: 'body' });
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.http
               .get<Exercise>(`${EXERCISE_URL}/get/${id}`, { observe: 'body' });
  }

  createExercise(exercise: Exercise): Observable<void> {
    return this.http
               .post<void>(`${EXERCISE_URL}/new`, exercise, { observe: 'body' });
  }

  updateExercise(id: number, exercise: Exercise): Observable<void> {
    return this.http
               .put<void>(`${EXERCISE_URL}/update/${id}`, exercise, { observe: 'body' });
  }

  patchExercise(id: number, exercise: Exercise): Observable<void> {
    return this.http
               .patch<void>(`${EXERCISE_URL}/patch/${id}`, exercise, { observe: 'body' });
  }

  deleteExercise(id: number): Observable<void> {
    return this.http
               .delete<void>(`${EXERCISE_URL}/delete/${id}`, { observe: 'body' });
  }

}
