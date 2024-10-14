import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Driver-card.component.html',
  styleUrls: ['./Driver-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Driver-card]': 'true'
  }
})

export class DriverCardComponent {


}