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

  //get verified clients
  getVerifiedClients(){
    //return this.http.get(this.baseURI+'verifiedClients');
    return this.http.get(baseURL+'admin/verifiedClients');
  }

  //get not verified clients
  getNotVerifiedClients(){
    //return this.http.get(this.baseURI+'notVerifiedClients');
    return this.http.get(baseURL+'admin/notVerifiedClients');
  }
}
