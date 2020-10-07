import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Med } from 'app/shared/med';
import { Observable } from 'rxjs';
import { Order } from 'app/shared/order';
import { MedicineserachService } from 'app/services/medicineserach.service';
import { OrderService } from 'app/services/order.service';
import { OcrService } from 'app/services/ocr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DeliveryPersonService } from 'app/services/deliveryPerson/delivery-person.service';
import { DeliveryPerson } from 'app/shared/deliveryPerson';
import { AddmedicineComponent } from "app/addmedicine/addmedicine.component";

@Component({
  selector: 'app-assign-driver',
  templateUrl: './assign-driver.component.html',
  styleUrls: ['./assign-driver.component.css']
})
export class AssignDriverComponent implements OnInit {
  deliveryPersons: any = [];
  searchText: string = "sasa";
  deliveryPersonId:string = "hellowwww";
  imageSource;
  addDL: boolean;
  @Input() public deliveryPersonsList: Med[];
  errMsg: string;
  filteredMeds: Observable<string[]>;       
  currentMed: Med;
  order: Order;
  id: string;
  dlList: DeliveryPerson[] = new Array();
  // route: ActivatedRoute
  texts: string[] = new Array();
  prescriptionURL:string;
  @Output() public select: EventEmitter<{}> = new EventEmitter();
  constructor(
    private medicineserachService: MedicineserachService,
    private orderService: OrderService,
    private ocrService: OcrService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private deliveryPersonService: DeliveryPersonService,
  ) {
    
   }
 
  ngOnInit(): void {
    // this.getDeliveryPersons();
    this.addDL = false;
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.orderService.getSpecificOrders(this.id).subscribe(
      (order) => {
        console.log(order),
        (this.prescriptionURL = order.prescription_url),
        (this.order = order)(
          console.log(order),
          (this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
            ` ${order.prescription_url}`
          ))
        );
        
      },
      (errmsg) => (this.errMsg = <any>errmsg)
    );
    
  }

  review(){
    console.log(this.deliveryPersonId)
    console.log(this.id)
    var doc = {
      "driver":this.deliveryPersonId,
      "status":"driverAssigned"
    }
    this.orderService.updateOrderWithDriver(doc,this.id).subscribe(
      (res) => {
        if(res["status"]==202){
          window.alert("done")
          this.router.navigate(['/dashboard'])
        }
      },
      (errmsg) => {
        (this.errMsg = <any>errmsg) 
        console.log(this.errMsg)
        window.alert("error")
      }
    );
  }

  getDeliveryPersons(){
    this.addDL = true;
    this.deliveryPersonService.getDeliveryPersons().subscribe(
      (data)=>{
      console.log(data);
      this.deliveryPersonsList = data["data"];
      console.log(this.deliveryPersonsList);
    })
  }

  // addMedicine() {
  //   this.addMed = true;
  //   this.medicineserachService.fetchMeds().subscribe(
  //     (meds) => ((this.meds = meds["data"]), console.log(this.meds)),
  //     (errmsg) => (this.errMsg = <any>errmsg)
  //   );
  //   console.log(this.meds);
  // }

  // public onSelect(deliveryPerson: DeliveryPerson): void {
  //   this.deliveryPerson = deliveryPerson;
  //   this.select.emit(deliveryPerson);
  //   console.log(deliveryPerson);
  //   // this.medList.push(med);
  //   console.log(this.dlList);
  // }


}
