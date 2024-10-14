import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverHomeComponent } from './home/Driver-home.component';
import { DriverNewComponent } from './new/Driver-new.component';
import { DriverDetailComponent } from './detail/Driver-detail.component';

const routes: Routes = [
  {path: '', component: DriverHomeComponent},
  { path: 'new', component: DriverNewComponent },
  { path: ':id', component: DriverDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Driver-detail-permissions'
      }
    }
  }
];

export const DRIVER_MODULE_DECLARATIONS = [
    DriverHomeComponent,
    DriverNewComponent,
    DriverDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }