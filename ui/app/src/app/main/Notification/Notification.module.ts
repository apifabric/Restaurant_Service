import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {NOTIFICATION_MODULE_DECLARATIONS, NotificationRoutingModule} from  './Notification-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    NotificationRoutingModule
  ],
  declarations: NOTIFICATION_MODULE_DECLARATIONS,
  exports: NOTIFICATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationModule { }