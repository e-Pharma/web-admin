import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  VerifiedClient:any = [];
  NotVerifiedClient:any = [];

  constructor(private clientService:ClientService) { 
    this.readVerifiedClient();
    this.readNotVerifiedClient();
  }

  ngOnInit(): void {
  }

  readVerifiedClient(){
    this.clientService.getVerifiedClients().subscribe((data)=>{
      console.log(data);
      this.VerifiedClient=data;
    })
  }

  readNotVerifiedClient(){
    this.clientService.getNotVerifiedClients().subscribe((data)=>{
      console.log(data);
      this.NotVerifiedClient = data;
    })
  }
  
}