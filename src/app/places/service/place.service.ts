import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryCode} from "../../shared/model/country-code";

@Injectable()
export class PlaceService {
  readonly baseUrl = 'api/v1/place';
  constructor(private http: HttpClient) { }

  getPlaces(countryCode: CountryCode, city: string): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.baseUrl}/list/${countryCode}/${city}`);
  }
  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.baseUrl}/list`);
  }
}
