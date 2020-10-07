import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { baseURL } from 'app/shared/baseurl';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

    baseURI:string = 'http://localhost:3000/admin/';
    headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http: HttpClient) { }

  //View order feedbacks
  viewOrderFeedback(id:string){
    // return this.http.get(this.baseURI+'orderFeedback/'+id).pipe(
    //   map((res:Response)=>{
    //     return res || {}
    //   }),
    //   catchError(this.errorMgmt)
    // )
    return this.http.get(baseURL+'admin/orderFeedback/'+id).pipe(
      map((res:Response)=>{
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  //Error handling
  errorMgmt(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Get client-side error
      errorMessage = error.error.message;
    }
    else{
      //Get server-side error
      errorMessage =`Error Code: ${error.status}\nMessage:${error.message}`;
      console.log(errorMessage);
      return throwError(errorMessage);
    }
  }
}
