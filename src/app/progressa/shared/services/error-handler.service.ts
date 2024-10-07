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
}