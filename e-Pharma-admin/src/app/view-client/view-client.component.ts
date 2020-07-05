import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/services/client/client.service';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit {
  Client:any = [];
  Orders:any = [];
  PendingOrders:any = [];
  RejectedOrders:any = [];
  CompletedOrders:any = [];
  searchText:string = '';

  constructor(
    private ClientServeice:ClientService,
    private route:ActivatedRoute
    ) {
      let id = this.route.snapshot.paramMap.get('id');
      this.readClient(id);
  }

  ngOnInit(): void {
  }

  readClient(id){
    this.ClientServeice.getClient(id).subscribe((data)=>{
      console.log(data);
      this.Client=data;
      let email = this.Client.data.email;
      this.ClientServeice.getClientOrders(email).subscribe((data)=>{
        console.log(data);
        this.Orders = data;

        for(let i=0;i<this.Orders.data.length;i++){
          if(this.Orders.data[i].status=='is_reviewed'){
            this.Orders.data[i].status="Pharmacist's Review Required";
            this.PendingOrders.push(this.Orders.data[i]);
          }
          else if(this.Orders.data[i].status=='is_paid'){
            this.Orders.data[i].status="Waiting for client's confirmation";
            this.PendingOrders.push(this.Orders.data[i]);
          }
          else if(this.Orders.data[i].status=='is_dispatched'){
            this.Orders.data[i].status="Ready to dispatch";
            this.PendingOrders.push(this.Orders.data[i]);
          }
          else if(this.Orders.data[i].status=='is_delivered'){
            this.Orders.data[i].status="Order dispatched";
            this.PendingOrders.push(this.Orders.data[i]);
          }
          else if(this.Orders.data[i].status=='completed'){
            this.Orders.data[i].status='Successfully Completed';
            this.CompletedOrders.push(this.Orders.data[i]);
          }
          else if(this.Orders.data[i].status=='is_rejected'){
            this.Orders.data[i].status="Order Rejected";
            this.RejectedOrders.push(this.Orders.data[i]);
          }
        }
        
        console.log(this.CompletedOrders);
        console.log(this.PendingOrders);
        console.log("Order length" + this.Orders.data.length);
      })
    })
  }

}
