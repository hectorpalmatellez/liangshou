import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '@envs/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  get<T extends {}>(param: string): Observable<Array<T>> {
    return this.http.get<Array<T>>(environment.apiUrl + param);
  }
}
