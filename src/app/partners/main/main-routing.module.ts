import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/admin/main/main.component';
import { FleetComponent } from './fleet/fleet.component';

const routes: Routes = [
  {path: "", component: MainComponent, children: [
    {path: "fleet", component: FleetComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
