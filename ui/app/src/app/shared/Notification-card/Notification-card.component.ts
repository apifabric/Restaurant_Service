import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Notification-card.component.html',
  styleUrls: ['./Notification-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Notification-card]': 'true'
  }
})

export class NotificationCardComponent {


}