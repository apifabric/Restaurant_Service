import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Promo-new',
  templateUrl: './Promo-new.component.html',
  styleUrls: ['./Promo-new.component.scss']
})
export class PromoNewComponent {
  @ViewChild("PromoForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}