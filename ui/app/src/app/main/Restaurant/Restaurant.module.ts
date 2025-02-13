import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {RESTAURANT_MODULE_DECLARATIONS, RestaurantRoutingModule} from  './Restaurant-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RestaurantRoutingModule
  ],
  declarations: RESTAURANT_MODULE_DECLARATIONS,
  exports: RESTAURANT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RestaurantModule { }