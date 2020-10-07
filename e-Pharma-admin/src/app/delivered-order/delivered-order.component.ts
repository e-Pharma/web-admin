import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { DeliveryPersonService } from "app/services/deliveryPerson/delivery-person.service";
import { MedicineserachService } from "app/services/medicineserach.service";
import { OrderService } from "app/services/order.service";
import { Order } from "app/shared/order";

@Component({
  selector: "app-delivered-order",
  templateUrl: "./delivered-order.component.html",
  styleUrls: ["./delivered-order.component.css"],
})
export class DeliveredOrderComponent implements OnInit {
  id: string;
  imageSource;
  prescriptionURL: string;
  order: Order;
  errMsg: string;

  constructor(
    private deliveryPersonService: DeliveryPersonService,
    private medicineserachService: MedicineserachService,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private sanitizer: DomSanitizer
  ) {}
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
  ngOnInit(): void {
    this.getOrderDetails();
  }
}
