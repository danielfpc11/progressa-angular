import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ErrorHandlerService, ExerciseType } from '../../../shared';
import { ExerciseTypeService } from '../../services';
import { ExerciseTypeAdapter } from '../../adapters';

@Injectable({
  providedIn: 'root'
})
export class ExerciseTypeConnector {

  constructor(protected exerciseSetService: ExerciseTypeService,
              protected errorHandler: ErrorHandlerService) {
  }

  getExerciseTypes(): Observable<ExerciseType[]> {
    return this.exerciseSetService
               .getExerciseTypes()
               .pipe(
                 map(
                   (dataList: any[]): ExerciseType[] => (dataList.map((data: any): ExerciseType => ExerciseTypeAdapter.adaptResponseBody(data)))
                 ),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  getExerciseTypeById(id: number): Observable<ExerciseType> {
    return this.exerciseSetService
               .getExerciseTypeById(id)
               .pipe(
                 map((data: any): ExerciseType => ExerciseTypeAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  createExerciseType(exerciseType: ExerciseType): Observable<ExerciseType> {
    const data: ExerciseType = ExerciseTypeAdapter.adaptRequestBody(exerciseType);

    return this.exerciseSetService
               .createExerciseType(data)
               .pipe(
                 map((data: any): ExerciseType => ExerciseTypeAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  updateExerciseType(id: number, exerciseType: ExerciseType): Observable<ExerciseType> {
    const data: ExerciseType = ExerciseTypeAdapter.adaptRequestBody(exerciseType);

    return this.exerciseSetService
               .updateExerciseType(id, data)
               .pipe(
                 map((data: any): ExerciseType => ExerciseTypeAdapter.adaptResponseBody(data)),
                 catchError((error: Error) => this.errorHandler.handleError(error))
               );
  }

  deleteExerciseType(id: number): Observable<void> {
    return this.exerciseSetService.deleteExerciseType(id);
  }

}