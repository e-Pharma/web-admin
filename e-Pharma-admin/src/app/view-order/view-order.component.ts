import { Component, OnInit, Input } from "@angular/core";
import { Med } from "app/shared/med";
import { Observable } from "rxjs";
import { Order } from "app/shared/order";
import { MedicineserachService } from "app/services/medicineserach.service";
import { OrderService } from "app/services/order.service";
import { OcrService } from "app/services/ocr.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-view-order",
  templateUrl: "./view-order.component.html",
  styleUrls: ["./view-order.component.css"],
})
export class ViewOrderComponent implements OnInit {
 

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

  constructor(
    private medicineserachService: MedicineserachService,
    private orderService: OrderService,
    private ocrService: OcrService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addMed = false;
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
}
