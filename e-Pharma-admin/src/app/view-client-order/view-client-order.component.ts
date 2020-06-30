import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/services/client/client.service';

@Component({
  selector: 'app-view-client-order',
  templateUrl: './view-client-order.component.html',
  styleUrls: ['./view-client-order.component.css']
})

export class ViewClientOrderComponent implements OnInit {
  Order:any = [];

  constructor(
    private ClientServeice:ClientService,
    private route:ActivatedRoute
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.getOrderDetails(id);
  }

  ngOnInit(): void {
  }

  getOrderDetails(id){
    this.ClientServeice.getClientOrderByID(id).subscribe((data)=>{
      this.Order = data;
      console.log(this.Order);
    })
  }

}
