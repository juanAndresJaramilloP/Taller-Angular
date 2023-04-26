import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie';

const API_URL = "../../assets/";
const series = 'series.json';

@Injectable()
export class SerieService {

constructor(private http: HttpClient) { }

getSeries(): Observable<Serie[]> {
  return this.http.get<Serie[]>(API_URL + series);
}

}



