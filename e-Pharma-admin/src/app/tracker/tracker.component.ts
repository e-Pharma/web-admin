import { Component, OnInit } from '@angular/core';
import { DeliveryPersonService } from '../services/deliveryPerson/delivery-person.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  deliveryPersons:any = [];
  //Location of the Client (Pharmacy)
  lat = 6.931970;
  lng = 79.857750;
  pharmacyIcon = {
      url: 'https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-03-512.png',
      scaledSize: {
        width: 30,
        height: 30 
      }
  }
  driverIcon = {
      url: 'https://jillyscarwash.com/wp-content/uploads/2018/09/jillys-marker-map-pin-300x300.png',
      scaledSize: {
        width: 30,
        height: 30 
      }
  } 
socket;

  constructor(private deliveryPersonService: DeliveryPersonService) { 
    this.readDeliveryPersons();
    this.socket = io('https://e-pharma-server.herokuapp.com');
  }

  readDeliveryPersons(){
    this.deliveryPersonService.getDeliveryPersons().subscribe((data)=>{
      console.log(data);
      this.deliveryPersons = data;
      console.log(this.deliveryPersons.data)
    })
  }

  ngOnInit(): void {
    this.readDeliveryPersons();
    this.socket.on('locationUpdated', ()=>{
      this.readDeliveryPersons();
    });
  }

}
