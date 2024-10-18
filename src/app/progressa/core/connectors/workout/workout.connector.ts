import { catchError, map, Observable } from 'rxjs';
import { ErrorHandlerService, Workout } from '../../../shared';
import { WorkoutService } from '../../services';
import { Injectable } from '@angular/core';
import { WorkoutAdapter } from '../../adapters';

@Injectable({
  providedIn: 'root'
})
export class WorkoutConnector {

  constructor(protected workoutService: WorkoutService,
              protected errorHandler: ErrorHandlerService) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.workoutService
               .getWorkouts()
               .pipe(
                 map((datalist: any[]): Workout[] => datalist.map((data: any): Workout => WorkoutAdapter.adaptResponseBody(data))),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  getWorkoutById(id: number): Observable<Workout> {
    return this.workoutService
               .getWorkoutById(id)
               .pipe(
                 map((data: any): Workout => WorkoutAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  createWorkout(workout: Workout): Observable<void> {
    const data: Workout = WorkoutAdapter.adaptRequestBody(workout);

    return this.workoutService
               .createWorkout(data)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  updateWorkout(id: number, workout: Workout): Observable<void> {
    const data = WorkoutAdapter.adaptRequestBody(workout);

    return this.workoutService
               .updateWorkout(id, data)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  patchWorkout(id: number, workout: Workout): Observable<void> {
    const data = WorkoutAdapter.adaptRequestBody(workout);

    return this.workoutService
               .patchWorkout(id, data)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  deleteWorkout(id: number): Observable<void> {
    return this.workoutService
               .deleteWorkout(id)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

}
