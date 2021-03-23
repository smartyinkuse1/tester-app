import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "admin", loadChildren: ()=> import('../app/admin/admin.module').then(m => m.AdminModule) },
  {path: "partners", loadChildren: ()=> import('../app/partners/partners.module').then(m => m.PartnersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
