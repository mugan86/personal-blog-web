import { OneColumPortfolioModule } from '@shared/one-colum-portfolio/one-colum-portfolio.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { BigInfoCardModule } from '@shared/big-info-card/big-info-card.module';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    BigInfoCardModule,
    OneColumPortfolioModule
  ]
})
export class OverviewModule { }
