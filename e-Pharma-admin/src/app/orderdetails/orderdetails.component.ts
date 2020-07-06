/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MedicineserachService } from "app/services/medicineserach.service";
import { FormControl } from "@angular/forms";
import { Med } from "app/shared/med";
import { Subject, Observable } from "rxjs";
import { AddmedicineComponent } from "app/addmedicine/addmedicine.component";
import { OrderService } from "app/services/order.service";
import { Order } from "app/shared/order";
import { ActivatedRoute } from "@angular/router";
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { DomSanitizer } from "@angular/platform-browser";

// import {Platform} from '@ionic/angular';
declare var google;
@Component({
  selector: "app-orderdetails",
  templateUrl: "./orderdetails.component.html",
  styleUrls: ["./orderdetails.component.css"],
})
export class OrderdetailsComponent implements OnInit {
  constructor(
    private medicineserachService: MedicineserachService,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
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

  @Output() public select: EventEmitter<{}> = new EventEmitter();

  ngOnInit(): void {
    this.addMed = false;
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.orderService.getSpecificOrders(this.id).subscribe(
      (order) => {
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
    console.log(this.meds);
  }

  calculateDeliveryCharges() {
    var gpsPharmacy = new google.maps.LatLng(6.8511, 79.9212);
    var gpsClient = new google.maps.LatLng(6.927, 79.864);
    var distance = google.maps.geometry.spherical.computeDistanceBetween(
      gpsClient,
      gpsPharmacy
    );
    console.log(distance);
  }

  public onSelect(med: Med): void {
    this.currentMed = med;
    this.select.emit(med);
    console.log(med);
    this.medList.push(med);
    console.log(this.medList);
  }

  review() {
    var full_amount: number = 0;
    for (let i = 0; i < this.medList.length; ++i) {
      full_amount =
        full_amount +
        this.medList[i]["quantity"] * this.medList[i]["unit_price"];
    }
    var delivery_charges: number = 450;
    console.log(full_amount);
    var doc = {
      "delivery_charges":delivery_charges,
      "full_amount":full_amount,
      "medicine_list":this.medList,
      "status":"is_paid"
    }

    this.orderService.updateOrder(doc,this.id).subscribe(
      (res) => {
        if(res["status"]==202){
          window.alert("done")
        }
      },
      (errmsg) => {
        (this.errMsg = <any>errmsg) 
        console.log(this.errMsg)
        window.alert("error")
      }
    );
  }
}
