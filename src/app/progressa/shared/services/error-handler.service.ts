import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  handleError(error: Error): Observable<never> {
    console.error(`Error fetching data: ${ error.message }`);

    return throwError(() => new Error(error.message));
  }

  // handleError(error: any): Observable<never> {
  //   let errorStrategy!: ErrorStrategy = this.errorStrategies.find(errorStrategy => errorStrategy.isValid(error));
  //   return errorStrategy.handleError(error);
  // }

}