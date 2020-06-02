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
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatDialogModule} from '@angular/material/dialog';
import { ClientsComponent } from './clients/clients.component'; 
import { AddmedicineComponent } from './addmedicine/addmedicine.component'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ListFilterPipe } from "./shared/list/pipe";
import { MatSelectModule } from "@angular/material/select";
import {MatListModule} from '@angular/material/list'; 




baseURL
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    }),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule
    
  ],


  declarations: [AppComponent, AdminLayoutComponent, OrdersComponent, OrderdetailsComponent, AddmedicineComponent, ListFilterPipe,ClientsComponent],

  providers: [
    {provide: 'BaseURL',useValue:baseURL}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
