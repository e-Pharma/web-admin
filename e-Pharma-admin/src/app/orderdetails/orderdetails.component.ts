import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MedicineserachService } from "app/services/medicineserach.service";
import { FormControl } from "@angular/forms";
import { Med } from "app/shared/med";
import { Subject, Observable } from "rxjs";
import { AddmedicineComponent } from "app/addmedicine/addmedicine.component";

@Component({
  selector: "app-orderdetails",
  templateUrl: "./orderdetails.component.html",
  styleUrls: ["./orderdetails.component.css"],
})
export class OrderdetailsComponent implements OnInit {
  constructor(private medicineserachService: MedicineserachService) {}

  addMed: boolean;
  @Input() public meds: Med[];
  errMsg: string;
  filteredMeds: Observable<string[]>;
  currentMed: Med;

  @Output() public select: EventEmitter<{}> = new EventEmitter();

  ngOnInit(): void {
    this.addMed = false;
  }

  addMedicine() {
    this.addMed = true;
    this.medicineserachService.fetchMeds().subscribe(
      (meds) => ((this.meds = meds["data"]), console.log(this.meds[0]["name"])),
      (errmsg) => (this.errMsg = <any>errmsg)
    );
    console.log(this.meds);
  }

  public onSelect(med: Med): void {
    this.currentMed = med;
    this.select.emit(med);
    console.log(med);
  }
}
