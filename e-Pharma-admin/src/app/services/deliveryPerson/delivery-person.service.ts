import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { baseURL } from 'app/shared/baseurl';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {

    //baseURI:string = 'http://localhost:3000/admin/';
    headers = new HttpHeaders().set('Content-Type','application/json')

  constructor(private http: HttpClient) { }

  //get delivery persons
  getDeliveryPersons(){
    //return this.http.get(this.baseURI+'drivers');
    return this.http.get(baseURL+'admin/drivers');
  }

  //add delivery person
  addDeliveryPerson(){
    
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
