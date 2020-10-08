import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistanceServiceService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getDistance(lat:Number,long:Number):Observable<any>{
    console.log("here")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-agent': 'Mozilla/5.0 ()',
        'Access-Control-Allow-Origin':'*',
      }),
    };
    return this.http.get<any>('https://maps.googleapis.com/maps/api/directions/json?origin=6.924689,79.888645&destination=6.931970,79.857750&key=key',httpOptions).pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
