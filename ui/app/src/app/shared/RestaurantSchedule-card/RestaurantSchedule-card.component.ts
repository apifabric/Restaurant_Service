import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RestaurantSchedule-card.component.html',
  styleUrls: ['./RestaurantSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RestaurantSchedule-card]': 'true'
  }
})

export class RestaurantScheduleCardComponent {


}