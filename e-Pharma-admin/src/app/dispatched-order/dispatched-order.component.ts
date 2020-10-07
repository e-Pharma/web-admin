import { Component, OnInit } from "@angular/core";
import { DeliveryPersonService } from "../services/deliveryPerson/delivery-person.service";
import * as io from "socket.io-client";
import { MedicineserachService } from "app/services/medicineserach.service";
import { OrderService } from "app/services/order.service";
import { ActivatedRoute } from "@angular/router";
import { Order } from "app/shared/order";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-dispatched-order",
  templateUrl: "./dispatched-order.component.html",
  styleUrls: ["./dispatched-order.component.css"],
})
export class DispatchedOrderComponent implements OnInit {
  deliveryPersons: any = [];
  delivery_lat: string;
  delivery_long: string;
  delivery_name: string;
  errMsg: string;
  //Location of the Client (Pharmacy)
  lat = 6.93197;
  lng = 79.85775;
  pharmacyIcon = {
    url:
      "https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-03-512.png",
    scaledSize: {
      width: 30,
      height: 30,
    },
  };
  driverIcon = {
    url:
      "https://jillyscarwash.com/wp-content/uploads/2018/09/jillys-marker-map-pin-300x300.png",
    scaledSize: {
      width: 30,
      height: 30,
    },
  };
  socket;
  id: string;
  imageSource;
  prescriptionURL: string;
  order: Order;

  constructor(
    private deliveryPersonService: DeliveryPersonService,
    private medicineserachService: MedicineserachService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private sanitizer: DomSanitizer
  ) {
    this.readDeliveryPersons();
    this.socket = io("https://e-pharma-server.herokuapp.com");
  }
  async getOrderDetails() {
    this.id = this.route.snapshot.paramMap.get("id");
    await this.orderService.getSpecificOrders(this.id).subscribe(
      (order) => {
        // console.log(order),
        console.log("first here"),
          (this.prescriptionURL = order.prescription_url),
          (this.order = order)(
            // console.log(order),
            (this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(
              ` ${order.prescription_url}`
            ))
          );
      },
      (errmsg) => (this.errMsg = <any>errmsg)
    );
  }

  getDriverLocation() {
    console.log("finally");
    this.deliveryPersons.data.forEach((element) => {
      if (element["_id"] === this.order["driver"]) {
        console.log("one");
        this.delivery_lat = element["lat"];
        this.delivery_long = element["long"];
        this.delivery_name = element["user_name"];
      } else console.log("three");
      // console.log("three")
      // console.log(element)
    });
  }
  async readDeliveryPersons() {
    await this.deliveryPersonService.getDeliveryPersons().subscribe((data) => {
      this.deliveryPersons = data;
      console.log("second here");
      // console.log(this.deliveryPersons.data);
      // console.log(this.deliveryPersons.data[0]['_id']);
    });
  }

  ngOnInit(): void {
    this.getOrderDetails();
    this.readDeliveryPersons();
    this.getDriverLocation();
    this.socket.on("locationUpdated", () => {
      this.readDeliveryPersons();
    });

    // console.log(this.id);
  }
}
