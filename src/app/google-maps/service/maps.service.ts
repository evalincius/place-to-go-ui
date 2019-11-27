import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryCode} from "../model/country-code";

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  readonly baseUrl = 'api/v1/country';
  constructor(private http: HttpClient) { }

  getCountry(countryCode: CountryCode) : Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/${countryCode}`);
  }
}
