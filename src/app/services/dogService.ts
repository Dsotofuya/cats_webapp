import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDog } from '../interfaces/IDog';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  private apiUrl: string = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getDog(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }
}
