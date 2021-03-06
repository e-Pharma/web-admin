import { Component, OnInit, Inject } from "@angular/core";
import { Order } from "app/shared/order";
import { OrderService } from "app/services/order.service";
// import { url } from "inspector";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit {
  orders: any;
  errMsg: string;
  selected:string;
  show:boolean;
  buttonStr:string;
  urlStr:string;
  searchText:string = '';

  constructor(
    private orderService: OrderService,
    @Inject('BaseURL') public BaseURL
  ) {}

  ngOnInit(): void {
    // this.orders = this.orderService.getOrdersToBeReviewed();
    // this.orderService.getOrdersToBeReviewed().subscribe(
    //   (orders) => (this.orders = orders),
    //   (errmsg) => (this.errMsg = <any>errmsg)
    // );
    
  }

  changeView(selected:string){
    this.show = true;
    this.selected = selected;
    if(selected=='pending'){
      this.buttonStr='Review Order'
      this.urlStr='/orderdetail'
    }
    else if(selected=='reviewed'){
      this.buttonStr='View Order'
      this.urlStr='/vieworder'
    }
    else if(selected=='paid'){
      this.buttonStr = 'View Order'
      this.urlStr = '/paidvieworder' 
    }
    else if(selected=='dispatched'){
      this.buttonStr = 'View Order'
      this.urlStr = '/dispatchorder'
    }
    else if(selected=='completed'){
      this.buttonStr = 'View Order'
      this.urlStr = '/deliveredorder'
      
    }
    else if(selected=='rejected'){
      this.buttonStr = ''
    }
    this.orderService.getOrders(selected).subscribe(
      (orders) => (this.orders = orders),
      
      (errmsg) => (this.errMsg = <any>errmsg)
    );

  }   

  reviewOrder(id:string){
  }
}
