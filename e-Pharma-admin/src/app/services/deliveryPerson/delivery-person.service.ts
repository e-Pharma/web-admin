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
  addDeliveryPerson(data){
    console.log(data);
    // return this.http.post(this.baseURI+'addDriver',data).pipe(
    //   catchError(this.errorMgmt)
    // )
    return this.http.post(baseURL+'admin/addDriver',data).pipe(
      catchError(this.errorMgmt)
    )
  }

  //delete delivery person
  deleteDeliveryPerson(id:string,data){
    // return this.http.put(this.baseURI+'deleteDriver/'+id,data).pipe(
    //   catchError(this.errorMgmt)
    // )
    return this.http.put(baseURL+'admin/deleteDriver/'+id,data).pipe(
      catchError(this.errorMgmt)
    )
  }

  //update delivery person (temporary)
  updateDeliveryPerson(id:string,data){
    // return this.http.put(this.baseURI+'updateDriverLatLong/'+id,data).pipe(
    //   catchError(this.errorMgmt)
    // )
    return this.http.put(baseURL+'admin/updateDriverLatLong/'+id,data).pipe(
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
