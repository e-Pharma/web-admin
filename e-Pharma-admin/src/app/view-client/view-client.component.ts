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
      console.log("Hello from view Client")
      console.log(data);
      this.Client=data;
      console.log(this.Client)
    })
  }

}
