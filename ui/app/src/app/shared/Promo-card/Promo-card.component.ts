import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Promo-card.component.html',
  styleUrls: ['./Promo-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Promo-card]': 'true'
  }
})

export class PromoCardComponent {


}