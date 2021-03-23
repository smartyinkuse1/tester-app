import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [MainComponent, DashboardComponent, UsersComponent, SideBarComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
