import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { MedicineserachService } from "app/services/medicineserach.service";
import { FormControl } from "@angular/forms";
import { Med } from "app/shared/med";

@Component({
  selector: "app-addmedicine",
  templateUrl: "./addmedicine.component.html",
  styleUrls: ["./addmedicine.component.css"],
})  
export class AddmedicineComponent implements OnInit {
  constructor(private medicineserachService: MedicineserachService) {}

  @Input() public searchModel;


  public currentMed: Med;


  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void { }

  updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }

  private userIdSubject = new Subject<string>();
  myControl = new FormControl();
}
