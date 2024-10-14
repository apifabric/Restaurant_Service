import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Notification-new',
  templateUrl: './Notification-new.component.html',
  styleUrls: ['./Notification-new.component.scss']
})
export class NotificationNewComponent {
  @ViewChild("NotificationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}