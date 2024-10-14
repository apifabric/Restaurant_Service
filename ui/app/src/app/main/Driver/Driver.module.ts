import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DRIVER_MODULE_DECLARATIONS, DriverRoutingModule} from  './Driver-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DriverRoutingModule
  ],
  declarations: DRIVER_MODULE_DECLARATIONS,
  exports: DRIVER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DriverModule { }