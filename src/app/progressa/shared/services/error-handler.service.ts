import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  /**
   * Logs the error and returns an observable that throws the error.
   *
   * @param {Error} error - The error object to be handled.
   * @returns {Observable<never>} - An observable that throws a new error.
   */
  handleError(error: Error): Observable<never> {
    console.error(`Error fetching data: ${error.message}`);
    return throwError(() => new Error(error.message));
  }
}