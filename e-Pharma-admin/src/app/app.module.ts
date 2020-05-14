import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TypographyComponent } from './typography/typography.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MapsComponent } from './maps/maps.component';
import { IconsComponent } from './icons/icons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UpgradeComponent,
    TypographyComponent,
    TableListComponent,
    NotificationsComponent,
    MapsComponent,
    IconsComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
