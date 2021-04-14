import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  setLoading() {
    document.getElementById('lds-roller').classList.add('show');
  }

  disableLoading() {
    document.getElementById('lds-roller').classList.remove('show');
  }

  public get<T>(url): Observable<T> {
    this.setLoading();
    return this.http.get<T>(url, { headers: {}, observe: 'response' as 'response' })
      .pipe(
        map((response: HttpResponse<T>) => {
          this.disableLoading();
          return response.body;
        })
      );
  }

  public post<T>(url, body): Observable<T> {
    this.setLoading();
    return this.http.post<T>(url, body, { headers: {}, observe: 'response' as 'response' })
      .pipe(
        map((response: HttpResponse<T>) => {
          this.disableLoading();
          return response.body;
        })
      );
  }

  public put<T>(url, body): Observable<T> {
    return this.http.put<T>(url, body, { headers: {}, observe: 'response' as 'response' })
      .pipe(
        map((response: HttpResponse<T>) => {
          if ('token' in response.body) {
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user) {
              user.token = response.body['token'];
              sessionStorage.setItem('user', JSON.stringify(user));
            }
          }
          this.disableLoading();
          return response.body;
        })
      );
  }

  public delete<T>(url): Observable<T> {
    return this.http.delete<T>(url, { headers: {}, observe: 'response' as 'response' })
      .pipe(
        map((response: HttpResponse<T>) => {
          if ('token' in response.body) {
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user) {
              user.token = response.body['token'];
              sessionStorage.setItem('user', JSON.stringify(user));
            }
          }
          this.disableLoading();
          return response.body;
        })
      );
  }
}
