import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Change to baseURL (app/shared) herokuapp later ***********
  baseURI:string = 'http://localhost:3000/admin/';

  constructor(private http: HttpClient) { }

  //get all users
  getUsers(){
    return this.http.get(this.baseURI+'/users');
  }
}
