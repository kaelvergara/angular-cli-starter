import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  constructor(private http: HttpClient) {}

  get({}): Observable<any> {
    return this.http.get('/get', );
  }
}
