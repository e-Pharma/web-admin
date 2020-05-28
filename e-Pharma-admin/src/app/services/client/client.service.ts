import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'app/shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //change to baseURL (app/shared) LATER ************
  //baseURI:string = 'http://localhost:3000/admin/';

  constructor(private http: HttpClient) { }

  //get all clients
  getClients(){
    //return this.http.get(this.baseURI+'clients');
    return this.http.get(baseURL+'admin/clients');
  }
}
