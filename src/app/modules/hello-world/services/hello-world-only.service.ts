import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldOnlyService {

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get('/assets/js/test.json');
  }
}
