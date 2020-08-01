import { Component, OnInit } from '@angular/core';
import { DeliveryPersonService } from '../services/deliveryPerson/delivery-person.service';

@Component({
  selector: 'app-delivery-person',
  templateUrl: './delivery-person.component.html',
  styleUrls: ['./delivery-person.component.css']
})
export class DeliveryPersonComponent implements OnInit {
  deliveryPersons:any = [];
  searchText:string = '';

  constructor(private deliveryPersonService: DeliveryPersonService) {
      this.readDeliveryPersons();
   }

  ngOnInit(): void {
  }

  readDeliveryPersons(){
    this.deliveryPersonService.getDeliveryPersons().subscribe((data)=>{
      console.log(data);
      this.deliveryPersons = data;
      console.log(this.deliveryPersons.data)
    })
  }

}