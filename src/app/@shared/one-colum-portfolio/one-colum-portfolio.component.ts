import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInfoCard } from '@core/interfaces/info-card.interface';

@Component({
  selector: 'app-one-colum-portfolio',
  templateUrl: './one-colum-portfolio.component.html',
  styleUrls: ['./one-colum-portfolio.component.scss']
})
export class OneColumPortfolioComponent {
  @Input() info: IInfoCard = {
    title: 'Please you must be specify title',
    description: 'Please you must be specify description',
    price: 0
  };
  @Input() externalRouter = '-';
  @Input() btnDetailsLabel = 'Detalles';
  @Input() btnExternalLabel = "Código"
  constructor(private router: Router) { }

  showDetails = (id: number | undefined) => this.router.navigate(['/portfolio/item', id]);
  

  openExternal = (externalUrl: string | undefined) => window.open(externalUrl, '_blank');

}
