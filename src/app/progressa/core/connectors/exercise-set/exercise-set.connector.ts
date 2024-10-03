import { ExerciseSetService } from '../../services';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ExerciseSet } from '../../../shared';
import { ExerciseSetAdapter } from '../../adapters';
import { ErrorHandlerService } from '../../../shared';

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
                   (dataList: any[]): ExerciseSet[] => (dataList.map((data: any): ExerciseSet => ExerciseSetAdapter.adapt(data)))
                 ),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  getExerciseSetById(id: number): Observable<ExerciseSet> {
    return this.exerciseSetService
               .getExerciseSetById(id)
               .pipe(
                 map((data: any): ExerciseSet => ExerciseSetAdapter.adapt(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  createExerciseSet(exerciseSet: ExerciseSet): Observable<ExerciseSet> {
    return this.exerciseSetService
               .createExerciseSet(exerciseSet)
               .pipe(
                 map(
                   (data: any): ExerciseSet => ExerciseSetAdapter.adapt(data)
                 )
               );
  }

  updateExerciseSet(id: number, exerciseSet: ExerciseSet): Observable<ExerciseSet> {
    return this.exerciseSetService
               .updateExerciseSet(id, exerciseSet)
               .pipe(
                 map((data: any): ExerciseSet => ExerciseSetAdapter.adapt(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  deleteExerciseSet(id: number): Observable<void> {
    return this.exerciseSetService.deleteExerciseSet(id);
  }
}