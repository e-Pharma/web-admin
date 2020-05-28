import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/services/client/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  Client:any = [];

  constructor(private clientService:ClientService) { 
    this.readClient();
  }

  ngOnInit(): void {
  }

  readClient(){
    this.clientService.getClients().subscribe((data)=>{
      console.log(data);
      this.Client=data;
    })
  }

}
