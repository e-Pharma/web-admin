import { Component, OnInit, Inject } from "@angular/core";
import { Order } from "app/shared/order";
import { OrderService } from "app/services/order.service";

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
    this.orderService.getOrders(selected).subscribe(
      (orders) => (this.orders = orders),
      (errmsg) => (this.errMsg = <any>errmsg)
    );

  }
}
