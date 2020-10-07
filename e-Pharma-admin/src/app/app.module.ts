import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TableListComponent } from "./table-list/table-list.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";
import { MapsComponent } from "./maps/maps.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { OrdersComponent } from "./orders/orders.component";
import { HttpClientModule } from "@angular/common/http";
import { baseURL } from "./shared/baseurl";
import { OrderdetailsComponent } from "./orderdetails/orderdetails.component";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { ClientsComponent } from "./clients/clients.component";
import { AddmedicineComponent } from "./addmedicine/addmedicine.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ListFilterPipe } from "./shared/list/pipe";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { ViewClientComponent } from "./view-client/view-client.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { ViewClientOrderComponent } from "./view-client-order/view-client-order.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminLoginLayoutComponent } from "./layouts/admin-login-layout/admin-login-layout.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DeliveryPersonComponent } from "./delivery-person/delivery-person.component";
import { AddDeliveryPersonComponent } from "./add-delivery-person/add-delivery-person.component";
import { ViewOrderComponent } from "./view-order/view-order.component";
import { TrackerComponent } from "./tracker/tracker.component";
import { UpdateDeliveryPersonComponent } from "./update-delivery-person/update-delivery-person.component";
import { DeliveryHistoryComponent } from "./delivery-history/delivery-history.component";
import { AssignDriverComponent } from "./assign-driver/assign-driver.component";
import { DispatchedOrderComponent } from "./dispatched-order/dispatched-order.component";
import { DeliveredOrderComponent } from "./delivered-order/delivered-order.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';


baseURL;
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB_INN__LZyi6tnHGA1240QKxXZh8zW_sk",
      libraries: ["geometry"],
    }),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OrdersComponent,
    OrderdetailsComponent,
    AddmedicineComponent,
    ListFilterPipe,
    ClientsComponent,
    ViewClientComponent,
    ViewClientOrderComponent,
    AdminLoginComponent,
    AdminLoginLayoutComponent,
    DeliveryPersonComponent,
    AddDeliveryPersonComponent,
    ViewOrderComponent,
    TrackerComponent,
    UpdateDeliveryPersonComponent,
    DeliveryHistoryComponent,
    AssignDriverComponent,
    DispatchedOrderComponent,
    DeliveredOrderComponent,
  ],

  providers: [{ provide: "BaseURL", useValue: baseURL }],
  bootstrap: [AppComponent],
})
export class AppModule {}
