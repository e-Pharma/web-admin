import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryPersonService } from '../services/deliveryPerson/delivery-person.service';

@Component({
  selector: 'app-delivery-history',
  templateUrl: './delivery-history.component.html',
  styleUrls: ['./delivery-history.component.css']
})
export class DeliveryHistoryComponent implements OnInit {
  Orders:any = [];
  Pending: any = [];
  Dispatched: any = [];
  Delivered: any = [];
  searchText: string = '';

  constructor(
    private DeliveryPersonService:DeliveryPersonService,
    private route:ActivatedRoute
  ) {
    let id = this.route.snapshot.paramMap.get('id');
    this.readOrderHistory(id);
   }

  ngOnInit(): void {
  }

  readOrderHistory(id){
    this.DeliveryPersonService.viewOrderHistory(id).subscribe(data=>{
      console.log(data);
      this.Orders = data;

      for(let i=0;i<this.Orders.data.length;i++){
        if(this.Orders.data[i].status=='driverAssigned'){
          this.Orders.data[i].status="Pending";
          this.Pending.push(this.Orders.data[i]);
        }
        else if(this.Orders.data[i].status=='dispatched'){
          this.Orders.data[i].status="Dispatched";
          this.Dispatched.push(this.Orders.data[i]);
        }
        else if(this.Orders.data[i].status=='completed'){
          this.Orders.data[i].status="Delivered";
          this.Delivered.push(this.Orders.data[i]);
        }
      }
    })
  }

}
