import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Exercise, EXERCISE_URL } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) {
  }

  getExercise(): Observable<any> {
    return this.http.get<any>(
      `${EXERCISE_URL}/all`,
      {observe: 'body'}
    );
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.http.get<Exercise>(
      `${EXERCISE_URL}/get/${id}`,
      {observe: 'body'}
    );
  }

  createExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(
      `${EXERCISE_URL}/new`,
      exercise,
      {observe: 'body'}
    );
  }

  updateExercise(id: number): Observable<Exercise> {
    return this.http.put<Exercise>(
      `${EXERCISE_URL}/update/${id}`,
      {observe: 'body'}
    );
  }

  deleteExercise(id: number): Observable<Exercise> {
    return this.http.delete<Exercise>(
      `${EXERCISE_URL}/delete/${id}`,
      {observe: 'body'}
    );
  }
}
