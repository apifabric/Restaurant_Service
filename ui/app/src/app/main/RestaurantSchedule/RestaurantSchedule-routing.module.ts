import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantScheduleHomeComponent } from './home/RestaurantSchedule-home.component';
import { RestaurantScheduleNewComponent } from './new/RestaurantSchedule-new.component';
import { RestaurantScheduleDetailComponent } from './detail/RestaurantSchedule-detail.component';

const routes: Routes = [
  {path: '', component: RestaurantScheduleHomeComponent},
  { path: 'new', component: RestaurantScheduleNewComponent },
  { path: ':id', component: RestaurantScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RestaurantSchedule-detail-permissions'
      }
    }
  }
];

export const RESTAURANTSCHEDULE_MODULE_DECLARATIONS = [
    RestaurantScheduleHomeComponent,
    RestaurantScheduleNewComponent,
    RestaurantScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantScheduleRoutingModule { }