import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DeliveryPersonService } from '../services/deliveryPerson/delivery-person.service';

@Component({
  selector: 'app-add-delivery-person',
  templateUrl: './add-delivery-person.component.html',
  styleUrls: ['./add-delivery-person.component.css']
})

export class AddDeliveryPersonComponent implements OnInit {
  addDeliveryPersonForm:FormGroup;
  submitted:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private deliveryPersonService: DeliveryPersonService,
    private ngZone: NgZone,
    private router: Router
    ) { 
  }
  
  ngOnInit(): void {
    this.addDeliveryPersonForm = this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      contactNumber:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required]],
      vehicleNumber:['',[Validators.required,Validators.pattern("^[A-Z]{3}-[0-9]{4}$")]],
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required]]
    });

    //this.addDeliveryPersonForm.valueChanges.subscribe(console.log);
  }

  get firstName(){
    return this.addDeliveryPersonForm.get('firstName');
  }

  get lastName(){
    return this.addDeliveryPersonForm.get('lastName');
  }

  get vehicleNumber(){
    return this.addDeliveryPersonForm.get('vehicleNumber');
  }

  get username(){
    return this.addDeliveryPersonForm.get('username');
  }

  get password(){
    return this.addDeliveryPersonForm.get('password');
  }

  get confirmPassword(){
    return this.addDeliveryPersonForm.get('confirmPassword');
  }

  onSubmit(){
    this.submitted = true;
    if(!this.addDeliveryPersonForm.valid){
      return false;
    }
    else{
      this.deliveryPersonService.addDeliveryPerson(this.addDeliveryPersonForm.value).subscribe(
        (res)=>{
          this.ngZone.run(()=> this.router.navigateByUrl('/deliveryPersons'))
        }, (error)=>{
          console.log(error);
        }
      );
    }
  }

}