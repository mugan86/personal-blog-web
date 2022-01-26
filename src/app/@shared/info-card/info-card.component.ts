import { IInfoCard } from '@core/interfaces/info-card.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() info: IInfoCard = {
    title: 'Please you must be specify title',
    description: 'Please you must be specify description',
    price: 0
  };
  @Input() externalRouter = '-';
  @Input() buttonLabel = 'Más información';

  constructor() { }

  ngOnInit(): void {
    this.info.price = (this.info.price === 0) ? 'GRATIS': this.info.price;
  }

}
