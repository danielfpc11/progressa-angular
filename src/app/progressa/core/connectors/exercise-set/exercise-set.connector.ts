import { ExerciseSetService } from '../../services';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ErrorHandlerService, ExerciseSet } from '../../../shared';
import { ExerciseAdapter, ExerciseSetAdapter } from '../../adapters';

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

  createExerciseSet(exerciseSet: ExerciseSet): Observable<ExerciseSet> {
    const data: ExerciseSet = ExerciseSetAdapter.adaptRequestBody(exerciseSet);

    return this.exerciseSetService
               .createExerciseSet(data)
               .pipe(
                 map(
                   (data: any): ExerciseSet => ExerciseSetAdapter.adaptResponseBody(data)
                 )
               );
  }

  updateExerciseSet(id: number, exerciseSet: ExerciseSet): Observable<ExerciseSet> {
    const data: ExerciseSet = ExerciseAdapter.adaptRequestBody(exerciseSet);

    return this.exerciseSetService
               .updateExerciseSet(id, data)
               .pipe(
                 map((data: any): ExerciseSet => ExerciseSetAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  deleteExerciseSet(id: number): Observable<void> {
    return this.exerciseSetService.deleteExerciseSet(id);
  }
}