import { FormsModule } from '@angular/forms';
import { OneColumPortfolioModule } from '@shared/one-colum-portfolio/one-colum-portfolio.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { PaginationModule } from '@shared/pagination/pagination.module';


@NgModule({
  declarations: [
    OverviewComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    OneColumPortfolioModule,
    PaginationModule,
    FormsModule
  ]
})
export class OverviewModule { }
