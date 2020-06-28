import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProcessHTTPMsgService } from "./process-httpmsg.service";
// import { ORDERS } from 'app/shared/orders';
import { Observable, of } from 'rxjs';
import { Order } from "app/shared/order";
import { baseURL } from "app/shared/baseurl";
import { delay, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  getOrdersToBeReviewed():Observable<any>{
    console.log("here");
    // return ORDERS;
    return this.http
      .get<any>(baseURL + "admin/orders?value=is_reviewed")
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getOrders(selected:string):Observable<any>{
    return this.http
      .get<any>(baseURL+'admin/orders?value='+selected)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getSpecificOrders(id:string):Observable<any>{
    return this.http
      .get<any>(baseURL+'admin/order/'+id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
