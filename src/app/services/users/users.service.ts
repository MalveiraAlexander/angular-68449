import { HttpClient, HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/responses/user.response';
import { UserRequest } from '../../models/requests/user.request';

@Injectable()
export class UsersService {

  private httpClient = inject(HttpClient);
  private readonly URL_API = 'http://localhost:3000'
  public encoder: HttpParameterCodec;

  getUsers(query?: string): Observable<UserResponse[]> {
    let localVarQueryParameters = new HttpParams({ encoder: this.encoder });
    if (query !== undefined && query !== null) {
      localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
        <any>query, 'q');
    }
    return this.httpClient.get<UserResponse[]>(`${this.URL_API}/users`, { params: localVarQueryParameters });
  }

  getUser(id: number): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`${this.URL_API}/users/${id}`);
  }

  deleteUser(id: number): Observable<UserResponse> {
    return this.httpClient.delete<UserResponse>(`${this.URL_API}/users/${id}`);
  }

  updateUser(user: UserRequest, id: number): Observable<UserResponse> {
    return this.httpClient.put<UserResponse>(`${this.URL_API}/users/${id}`, user);
  }

  addUser(user: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.URL_API}/users`, user);
  }

  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams;
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        (value as any[]).forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(
          httpParams, value[k], key != null ? `${key}.${k}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }
}
