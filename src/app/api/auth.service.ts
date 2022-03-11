/* eslint-disable @typescript-eslint/naming-convention */
import { HttpService } from '../shared/services/http.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ServiceBase } from './service.base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ServiceBase {
  response: any;
  apiUrl = 'https://dev-auth-gday-as.azurewebsites.net';

  constructor(private http: HttpService) {
    super();
  }

  login(email: string, password: string): Observable<any> {
    const data = {
      username: email,
      password,
      client_id: 'CMSK11',
      client_secret: 'MatSatOnCat355',
      grant_type: 'password'
    };

    return this.http
      .post<any>(this.apiUrl + '/connect/token', data)
      .pipe(catchError(this.handleError));
  }
}
