import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { OrdersComponent } from "app/orders/orders.component";
import { ClientsComponent } from "app/clients/clients.component";
import { ViewClientComponent } from "app/view-client/view-client.component";
import { ViewClientOrderComponent } from "app/view-client-order/view-client-order.component";
import { OrderdetailsComponent } from "app/orderdetails/orderdetails.component";
import { DeliveryPersonComponent } from "app/delivery-person/delivery-person.component";
import { AddDeliveryPersonComponent } from "app/add-delivery-person/add-delivery-person.component";
import { ViewOrderComponent } from "app/view-order/view-order.component";
import { TrackerComponent } from "app/tracker/tracker.component";
import { UpdateDeliveryPersonComponent } from "app/update-delivery-person/update-delivery-person.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "clients", component: ClientsComponent },
  { path: "client/:id", component: ViewClientComponent },  
  { path: "client/viewClientOrder/:id", component: ViewClientOrderComponent},
  { path: "orders", component: OrdersComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "orderdetail/:id", component: OrderdetailsComponent },
  { path: "deliveryPersons", component: DeliveryPersonComponent },
  { path: "deliveryPersons/addDeliveryPerson", component: AddDeliveryPersonComponent },
  { path: "vieworder/:id", component: ViewOrderComponent },
  { path: "tracker", component: TrackerComponent },
  { path: "updateDeliveryPerson/:id", component: UpdateDeliveryPersonComponent}
];
