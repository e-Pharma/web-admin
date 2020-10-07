import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
import { Observable, of } from 'rxjs';  
import { baseURL } from "app/shared/baseurl";
import { delay, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }


  adminLogin(user_name:string, password:string):Observable<any>{
    return this.http
      .get<any>(baseURL+'admin/login?user_name='+user_name+'&password='+password)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  adminChangePass(doc:any):Observable<any>{
    console.log(doc);  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(baseURL + 'admin/updatePassword', doc, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

 
}
