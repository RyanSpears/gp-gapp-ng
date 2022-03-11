import { throwError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http/http';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceBase {
  constructor() { }

  camelCaseToSpaces(text: string) {
    return text.replace(/([A-Z])/g, ' $1').trim();
  }

  getEmptyList() {
    return of([]);
  }

  public handleError(error: HttpErrorResponse) {
    alert(error);

    if (error.error && typeof error.error === 'string') {
      return throwError(error.error);
    }

    if (Object.prototype.toString.call(error) === '[object String]') {
      return throwError(error);
    }

    if (error.error instanceof ErrorEvent) {
      return throwError(error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      return throwError(`${error.error}`);
    }
  }
}
