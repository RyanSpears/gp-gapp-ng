import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError, finalize } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class HttpService {
  authKey = 'obitAuth';
  baseUrl = '';

  constructor(private httpClient: HttpClient) {
    // this.baseUrl = environment.baseUrl;
  }

  configureAuthNew(opts: any) {
    const i = localStorage.getItem(this.authKey);
    if (i != null) {
      const auth = JSON.parse(i);
      if (auth.access_token != null) {
        opts.headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${auth.access_token}`
        );
      }
    }
  }

  delete<T>(url: string, opts = {}) {
    this.configureAuthNew(opts);
    return this.httpClient.delete<T>(this.baseUrl + url, opts);
  }

  doDelete<T>(url, opts = {}) {
    return this.delete(url, opts).pipe(
      map(() => true),
      catchError(this.handleError)
    );
  }

  doPost<T>(
    url: string,
    data: any
  ): Observable<T> {
    return this.post<T>(url, data, this.getRequestOptions()).pipe(
      catchError(this.handleError)
    );
  }

  doPut<T>(
    url: string,
    data: any
  ): Observable<T> {
    return this.put<T>(url, data, this.getRequestOptions()).pipe(
      catchError(this.handleError)
    );
  }

  get<T>(url: string, opts = {}) {
    this.configureAuthNew(opts);
    return this.httpClient.get<T>(this.baseUrl + url, opts);
  }

  getItem<T>(url: string): Observable<T> {
    return this.get<T>(url).pipe(catchError(this.handleError));
  }

  getItems<T>(
    url: string,
    opts = {}
  ): Observable<T[]> {
    return this.get<T[]>(url, opts).pipe(catchError(this.handleError));
  }

  post<T>(url: string, data: any, opts = {}) {
    this.configureAuthNew(opts);
    return this.httpClient.post<T>(this.baseUrl + url, data, opts);
  }

  put<T>(url, data, opts = {}) {
    this.configureAuthNew(opts);
    return this.httpClient.put<T>(this.baseUrl + url, data, opts);
  }

  private getRequestOptions(): any {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return { headers };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError(error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      return throwError(`${error.status}: ${error.error}`);
    }
  }
}
