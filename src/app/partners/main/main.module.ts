import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FleetComponent } from './fleet/fleet.component';


@NgModule({
  declarations: [MainComponent, FleetComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
