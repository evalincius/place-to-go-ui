import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Filter} from "../models/filter";

@Injectable()
export class PlaceService {
  readonly baseUrl = 'api/v1/places';
  constructor(private http: HttpClient) { }

  searchPlaces(filters: Filter[]): Observable<Place[]> {
    let params = new HttpParams();
    filters.forEach(filter => params = params.append(filter.type, filter.value));
    return this.http.get<Place[]>(`${this.baseUrl}`,{params: params});

  }
  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.baseUrl}/list`);
  }
}
