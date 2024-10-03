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
               .get<Workout[]>(`${ WORKOUT_URL }/all`, { observe: 'body' });
  }

  getWorkoutById(id: number): Observable<Workout> {
    return this.http
               .get<Workout>(`${ WORKOUT_URL }/get/${ id }`, { observe: 'body' });
  }

  createWorkout(workout: Workout): Observable<Workout> {
    return this.http
               .post<Workout>(`${ WORKOUT_URL }/new`, workout, { observe: 'body' });
  }

  updateWorkout(id: number, workout: Workout): Observable<Workout> {
    return this.http
               .put<Workout>(`${ WORKOUT_URL }/update/${ id }`, workout, { observe: 'body' });
  }

  deleteWorkout(id: number): Observable<void> {
    return this.http
               .delete<void>(`${ WORKOUT_URL }/delete/${ id }`, { observe: 'body' });
  }

}