import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout, WORKOUT_URL } from '../../../shared';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(protected http: HttpClient) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.http
               .get<Workout[]>(`${WORKOUT_URL}/all`, { observe: 'body' });
  }

  getWorkoutById(id: number): Observable<Workout> {
    return this.http
               .get<Workout>(`${WORKOUT_URL}/get/${id}`, { observe: 'body' });
  }

  createWorkout(workout: Workout): Observable<void> {
    return this.http
               .post<void>(`${WORKOUT_URL}/new`, workout, { observe: 'body' });
  }

  updateWorkout(id: number, workout: Workout): Observable<void> {
    return this.http
               .put<void>(`${WORKOUT_URL}/update/${id}`, workout, { observe: 'body' });
  }

  patchWorkout(id: number, workout: Workout): Observable<void> {
    return this.http
               .patch<void>(`${WORKOUT_URL}/patch/${id}`, workout, { observe: 'body' });
  }

  deleteWorkout(id: number): Observable<void> {
    return this.http
               .delete<void>(`${WORKOUT_URL}/delete/${id}`, { observe: 'body' });
  }

}
