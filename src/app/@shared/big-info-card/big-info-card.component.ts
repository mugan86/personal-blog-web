import { IInfoCard } from '@core/interfaces/info-card.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-info-card',
  templateUrl: './big-info-card.component.html',
  styleUrls: ['./big-info-card.component.scss']
})
export class BigInfoCardComponent implements OnInit {
  @Input() info: IInfoCard = {
    title: 'Please you must be specify title',
    description: 'Please you must be specify description',
    price: 0
  };
  @Input() externalRouter = '-';
  @Input() buttonLabel = 'Más información';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails = (id: number | undefined) => {
    this.router.navigate(['/portfolio/item', id]);
  }

}
