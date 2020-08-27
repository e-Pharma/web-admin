import { Component, OnInit } from '@angular/core';
import { DeliveryPersonService } from '../services/deliveryPerson/delivery-person.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-delivery-person',
  templateUrl: './update-delivery-person.component.html',
  styleUrls: ['./update-delivery-person.component.css']
})
export class UpdateDeliveryPersonComponent implements OnInit {
  submitted: Boolean = false;

  constructor(
    private deliveryPersonService: DeliveryPersonService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit(location:NgForm){
    let id = this.route.snapshot.paramMap.get('id');
    this.submitted = true;
    this.deliveryPersonService.updateDeliveryPerson(id,location.value).subscribe(
      (res)=>{
        console.log("Lat Long changed");
      }, (error)=>{
        console.log(error);
      }
    );
  }
}
