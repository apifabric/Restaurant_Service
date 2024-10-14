import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RestaurantSchedule-new',
  templateUrl: './RestaurantSchedule-new.component.html',
  styleUrls: ['./RestaurantSchedule-new.component.scss']
})
export class RestaurantScheduleNewComponent {
  @ViewChild("RestaurantScheduleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}