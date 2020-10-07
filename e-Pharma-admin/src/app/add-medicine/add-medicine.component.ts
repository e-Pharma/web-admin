import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MedicineService } from '../services/medicine/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})

export class AddMedicineComponent implements OnInit {
  addMedicineForm:FormGroup;
  submitted:boolean = false;
  searchText:string = "";
  Medicine:any = [];

  constructor(
    private formBuilder: FormBuilder,
    private medicineService: MedicineService,
    private ngZone: NgZone,
    private router: Router) {
      this.readMedicine();
    }

  ngOnInit(): void {
    this.addMedicineForm = this.formBuilder.group({
      name:['',[Validators.required]],
      unitPrice:['',[Validators.required]]
    });
  }

  get Name(){
    return this.addMedicineForm.get('Name');
  }

  get unitPrice(){
    return this.addMedicineForm.get('unitPrice');
  }

  readMedicine(){
    this.medicineService.viewMedicine().subscribe(data=>{
      console.log(data);
      this.Medicine = data;
    })
  }

  onSubmit(){
    console.log("Hi from dskjsk");
    console.log(this.addMedicineForm.value);
    this.submitted = true;
    if(!this.addMedicineForm.valid){
      return false;
    }
    else{
      this.medicineService.addMedicine(this.addMedicineForm.value).subscribe(
        (res)=>{
          location.reload();
        }, (error)=>{
          console.log(error);
        }
      );
    }
  }

}
