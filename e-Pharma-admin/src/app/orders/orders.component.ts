import { Component, OnInit } from '@angular/core';
import { Order } from 'app/shared/order';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
