import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-delivery-person',
  templateUrl: './add-delivery-person.component.html',
  styleUrls: ['./add-delivery-person.component.css']
})

export class AddDeliveryPersonComponent implements OnInit {
  addDeliveryPersonForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { 
  }
  
  ngOnInit(): void {
    this.addDeliveryPersonForm = this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      contactNumber:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email]],
      vehicleNumber:['',[Validators.required,Validators.pattern("^[A-Z]{3}-[0-9]{4}$")]],
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',Validators.required]
    });

    this.addDeliveryPersonForm.valueChanges.subscribe(console.log);
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
    
  }

}