import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Med } from 'app/shared/med';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from 'app/shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class MedicineserachService {

  private apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  fetchMeds(): Observable<Med[]> {
    return this.http
      .get<any>(baseURL + "search/medicines")
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
