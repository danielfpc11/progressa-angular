import { Injectable } from '@angular/core';
import { ExerciseService } from '../../services';
import { catchError, map, Observable } from 'rxjs';
import { ErrorHandlerService, Exercise } from '../../../shared';
import { ExerciseAdapter } from '../../adapters';

@Injectable({
  providedIn: 'root'
})
export class ExerciseConnector {

  constructor(protected exerciseService: ExerciseService,
              protected errorHandler: ErrorHandlerService) {
  }

  getExercise(): Observable<Exercise[]> {
    return this.exerciseService.getExercises()
               .pipe(
                 map(
                   (dataList: any[]): Exercise[] => dataList.map((data: any): Exercise => ExerciseAdapter.adaptResponseBody(data))
                 ),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  getExerciseById(id: number): Observable<Exercise> {
    return this.exerciseService
               .getExerciseById(id)
               .pipe(
                 map((data: any): Exercise => ExerciseAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  createExercise(exercise: Exercise): Observable<Exercise> {
    const data: Exercise = ExerciseAdapter.adaptRequestBody(exercise);

    return this.exerciseService
               .createExercise(data)
               .pipe(
                 map((data: any): Exercise => ExerciseAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  updateExercise(id: number, exercise: Exercise): Observable<Exercise> {
    const data: Exercise = ExerciseAdapter.adaptRequestBody(exercise);

    return this.exerciseService
               .updateExercise(id, data)
               .pipe(
                 map((data: any): Exercise => ExerciseAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  deleteExercise(id: number): Observable<void> {
    return this.exerciseService.deleteExercise(id);
  }
}