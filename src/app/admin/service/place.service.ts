import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryCode} from "../../shared/model/country-code";

@Injectable()
export class PlaceService {
  readonly baseUrl = 'api/v1/place';
  constructor(private http: HttpClient) { }

  getCountry(countryCode: CountryCode): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/${countryCode}`);
  }

  createPlace(place: Place): Observable<string> {
    return this.http.post<string>(this.baseUrl, place, {responseType: 'text' as 'json'});
  }

  uploadFile(fileToUpload: Blob): Observable<FileMetadata>{
    let formData = new FormData();
    formData.append('file', fileToUpload, 'file');
    return this.http.post<FileMetadata>(`${this.baseUrl}/upload-file`, formData);
  }
}
