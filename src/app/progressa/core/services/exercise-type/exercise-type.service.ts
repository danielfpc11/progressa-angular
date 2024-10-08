import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EXERCISE_TYPE_URL, ExerciseType } from '../../../shared';

@Injectable({
  providedIn: 'root'
})
export class ExerciseTypeService {

  constructor(protected http: HttpClient) {
  }

  getExerciseTypes(): Observable<ExerciseType[]> {
    return this.http
               .get<ExerciseType[]>(`${EXERCISE_TYPE_URL}/all`, { observe: 'body' });
  }

  getExerciseTypeById(id: number): Observable<ExerciseType> {
    return this.http
               .get<ExerciseType>(`${EXERCISE_TYPE_URL}/get/${id}`, { observe: 'body' });
  }

  createExerciseType(exerciseType: ExerciseType): Observable<ExerciseType> {
    return this.http
               .post<ExerciseType>(`${EXERCISE_TYPE_URL}/new`, exerciseType, { observe: 'body' });
  }

  updateExerciseType(id: number, exerciseType: ExerciseType): Observable<ExerciseType> {
    return this.http
               .put<ExerciseType>(`${EXERCISE_TYPE_URL}/update/${id}`, exerciseType, { observe: 'body' });
  }

  deleteExerciseType(id: number): Observable<void> {
    return this.http
               .delete<void>(`${EXERCISE_TYPE_URL}/delete/${id}`, { observe: 'body' });
  }

}
