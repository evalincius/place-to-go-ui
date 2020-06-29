import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryCode} from "../../shared/model/country-code";

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  readonly baseUrl = 'api/v1/country';
  constructor(private http: HttpClient) { }

  getCountrySummaries() : Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/summary/list`);
  }
}
