import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESTAURANTSCHEDULE_MODULE_DECLARATIONS, RestaurantScheduleRoutingModule} from  './RestaurantSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RestaurantScheduleRoutingModule
  ],
  declarations: RESTAURANTSCHEDULE_MODULE_DECLARATIONS,
  exports: RESTAURANTSCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RestaurantScheduleModule { }