import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { LoginComponent } from "../profile/components/login/login.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TeamListComponent,LoginComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NativeScriptUIListViewModule
  ]
})
export class DashboardModule { }
