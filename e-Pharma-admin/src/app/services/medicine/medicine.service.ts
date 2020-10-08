import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { baseURL } from 'app/shared/baseurl';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  //baseURI:string = 'http://localhost:3000/admin/';
  headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http: HttpClient) { }

  //add medicine
  addMedicine(data){
    console.log(data);
    // return this.http.post(this.baseURI+'addMedicine',data).pipe(
    //   catchError(this.errorMgmt)
    // )
    return this.http.post(baseURL+'admin/addMedicine',data).pipe(
      catchError(this.errorMgmt)
    )
  }

  //get all medicines
  viewMedicine(){
    //return this.http.get(this.baseURI+'getMedicine');
    return this.http.get(baseURL+'admin/getMedicine');
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
