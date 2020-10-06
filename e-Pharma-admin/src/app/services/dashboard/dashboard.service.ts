import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { baseURL } from 'app/shared/baseurl';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  //baseURI:string = 'http://localhost:3000/admin/';
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

  //get total orders count
  getTotalOrdersCount(){
    //return this.http.get(this.baseURI+'totalOrdersCount');
    return this.http.get(baseURL+'admin/totalOrdersCount');
  }

  //get completed orders count
  getCompletedOrdersCount(){
    //return this.http.get(this.baseURI+'completedOrdersCount');
    return this.http.get(baseURL+'admin/completedOrdersCount');
  }

  //get completed orders count
  getRejectedOrdersCount(){
    //return this.http.get(this.baseURI+'rejectedOrdersCount');
    return this.http.get(baseURL+'admin/rejectedOrdersCount');
  }

  //get completed orders count
  getTotalClientsCount(){
    //return this.http.get(this.baseURI+'totalClientsCount');
    return this.http.get(baseURL+'admin/totalClientsCount');
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
      errorMessage ='Error Code: ${error.status}\nMessage:${error.message}';
      console.log(errorMessage);
      return throwError(errorMessage);
    }
  }
}
