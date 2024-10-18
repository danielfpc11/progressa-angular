import { ExerciseSetService } from '../../services';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ErrorHandlerService, ExerciseSet } from '../../../shared';
import { ExerciseSetAdapter } from '../../adapters';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSetConnector {

  constructor(protected exerciseSetService: ExerciseSetService,
              protected errorHandler: ErrorHandlerService) {
  }

  getExerciseSets(): Observable<ExerciseSet[]> {
    return this.exerciseSetService
               .getExerciseSets()
               .pipe(
                 map(
                   (dataList: any[]): ExerciseSet[] => (dataList.map((data: any): ExerciseSet => ExerciseSetAdapter.adaptResponseBody(data)))
                 ),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  getExerciseSetById(id: number): Observable<ExerciseSet> {
    return this.exerciseSetService
               .getExerciseSetById(id)
               .pipe(
                 map((data: any): ExerciseSet => ExerciseSetAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  createExerciseSet(exerciseSet: ExerciseSet): Observable<void> {
    const data: ExerciseSet = ExerciseSetAdapter.adaptRequestBody(exerciseSet);

    return this.exerciseSetService
               .createExerciseSet(data)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  updateExerciseSet(id: number, exerciseSet: ExerciseSet): Observable<void> {
    const data: ExerciseSet = ExerciseSetAdapter.adaptRequestBody(exerciseSet);

    return this.exerciseSetService
               .updateExerciseSet(id, data)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  patchExerciseSet(id: number, exerciseSet: ExerciseSet): Observable<void> {
    const data: ExerciseSet = ExerciseSetAdapter.adaptRequestBody(exerciseSet);

    return this.exerciseSetService
               .patchExerciseSet(id, data)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  deleteExerciseSet(id: number): Observable<void> {
    return this.exerciseSetService
               .deleteExerciseSet(id)
               .pipe(
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }
}
