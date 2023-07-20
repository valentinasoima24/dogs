import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {
  private apiUrl: string = 'https://dog.ceo/api/';

  constructor(private httpClient: HttpClient) { }

  getAllDogs(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}breeds/list/all`);
  }
  getRandomImage(breed: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}breed/${breed}/images/random`);
  }

  getSubBreed(breed: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + `breed/${breed}/list`);
  }
}
