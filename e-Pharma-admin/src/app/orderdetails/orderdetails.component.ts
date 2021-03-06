/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MedicineserachService } from "app/services/medicineserach.service";
import { FormControl } from "@angular/forms";
import { Med } from "app/shared/med";
import { Subject, Observable } from "rxjs";
import { AddmedicineComponent } from "app/addmedicine/addmedicine.component";
import { OrderService } from "app/services/order.service";
import { Order } from "app/shared/order";
import { ActivatedRoute, Router } from "@angular/router";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { DomSanitizer } from "@angular/platform-browser";
import { OcrService } from "app/services/ocr.service";
import { DistanceServiceService } from "app/services/distance-service.service";

// import {Platform} from '@ionic/angular';
declare var google;
@Component({
  selector: "app-orderdetails",
  templateUrl: "./orderdetails.component.html",
  styleUrls: ["./orderdetails.component.css"],
})
export class OrderdetailsComponent implements OnInit {
  textSuggestions: boolean;
  constructor(
    private medicineserachService: MedicineserachService,
    private orderService: OrderService,
    private ocrService: OcrService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private distanceService: DistanceServiceService
  ) {}
  bl:boolean = false;
  imageSource;
  addMed: boolean;
  @Input() public meds: Med[];
  errMsg: string;
  filteredMeds: Observable<string[]>;
  currentMed: Med;
  order: Order;
  id: string;
  medList: Med[] = new Array();
  // route: ActivatedRoute
  texts: string[] = new Array();
  prescriptionURL: string;
  y: number;
  x: number;
  brng: number;

  distance: number;
  deliveryCharge:number=0;
  
  @Output() public select: EventEmitter<{}> = new EventEmitter();

  ngOnInit(): void {
    this.bl=false
    this.addMed = false;
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.orderService.getSpecificOrders(this.id).subscribe(
      (order) => {
        (this.prescriptionURL = order.prescription_url),
          (this.order = order)(
            (this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
              ` ${order.prescription_url}`
            ))
          );
      },
      (errmsg) => (this.errMsg = <any>errmsg)
    );
  }

  deleteRow(id) {
    console.log(this.prescriptionURL);
    console.log(id);
    for (let i = 0; i < this.medList.length; ++i) {
      if (this.medList[i]["_id"] === id) {
        this.medList.splice(i, 1);
        break;
      }
    }
  }

  addRow(event, id) {
    console.log("here");
    var val = event.target.value;
    console.log(val);
    for (let i = 0; i < this.medList.length; ++i) {
      if (this.medList[i]["_id"] === id) {
        this.medList[i]["quantity"] = val;
      }
    }
  }

  addMedicine() {
    this.addMed = true;
    this.medicineserachService.fetchMeds().subscribe(
      (meds) => ((this.meds = meds["data"]), console.log(this.meds)),
      (errmsg) => (this.errMsg = <any>errmsg)
    );
    // console.log(this.meds);
  }

  calculateDeliveryCharges() {
    console.log(this.order.lat);
    console.log(this.order.patient);
    this.distanceService
      .getDistance(this.order.lat, this.order.long)
      .subscribe((respose) => console.log(respose));
if(this.bl==false){
  // setTimeout(() => 250000);
  this.deliveryCharge=Math.round((Math.random()*1000))
      console.log(this.deliveryCharge)
      this.bl=true;
}
      
    
  }

  public onSelect(med: Med): void {
    this.currentMed = med;
    this.select.emit(med);
    // console.log(med);
    this.medList.push(med);
    // console.log(this.medList);
  }

  review() {
    var full_amount: number = 0;
    for (let i = 0; i < this.medList.length; ++i) {
      full_amount =
        full_amount +
        this.medList[i]["quantity"] * this.medList[i]["unit_price"];
    }
    
    full_amount = full_amount + this.deliveryCharge;
    console.log(full_amount);
    var doc = {
      delivery_charges: this.deliveryCharge,
      full_amount: full_amount,
      medicine_list: this.medList,
      status: "reviewed",
    };

    this.orderService.updateOrder(doc, this.id).subscribe(
      (res) => {
        if (res["status"] == 202) {
          window.alert("done");
          this.router.navigate(["/dashboard"]);
        }
      },
      (errmsg) => {
        this.errMsg = <any>errmsg;
        console.log(this.errMsg);
        window.alert("error");
      }
    );
  }

  reject(){
    var doc = {
      status: "rejected",
    };

    this.orderService.updateOrder(doc, this.id).subscribe(
      (res) => {
        if (res["status"] == 202) {
          window.alert("done");
          this.router.navigate(["/dashboard"]);
        }
      },
      (errmsg) => {
        this.errMsg = <any>errmsg;
        console.log(this.errMsg);
        window.alert("error");
      }
    );
  }

  ocr() {
    // var doc = {
    //   "Url":" "+this.prescriptionURL+" ",
    // }
    // console.log(this.prescriptionURL)
    // this.ocrService.getUrl(doc).subscribe(
    //   res => {
    //     var headers = res.getAllResponseHeaders()
    //     // var response = call.headers.get('Operation-Location')
    //     console.log(headers)
    //   },
    //   errmsg => {
    //     window.alert("OCR Model error" + errmsg)
    //   }
    // )

    this.ocrService.getText(this.id).subscribe(
      (res) => {
        this.textSuggestions = true;
        console.log(res["status"]);
        for (let i = 0; i < res["recognitionResult"]["lines"].length; ++i) {
          this.texts.push(res["recognitionResult"]["lines"][i]["text"]);
        }
        console.log(this.texts);
      },
      (errmsg) => {
        window.alert("OCR Model error" + errmsg);
      }
    );
  }
}
