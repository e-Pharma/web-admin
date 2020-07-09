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
      vehicleNumber:['',[Validators.required,Validators.pattern("^([A-Z])[-]([0-9])$")]],
      username:['',Validators.required],
      password:['',Validators.required, Validators.minLength(8)],
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

  onSubmit(){

  }

}
