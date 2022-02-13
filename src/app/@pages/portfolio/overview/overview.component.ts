import { PORTFOLIO_ITEMS } from './../../../@core/constants/portfolio';
import { Component, OnInit } from '@angular/core';
import { IInfoCard } from '@core/interfaces/info-card.interface';
import { pagination } from '@core/helpers/pagination';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  portfolioItems: Array<IInfoCard> =  [];
  selectPage = 3;
  itemsPerPage = 5;
  constructor() { 
    console.log(this.portfolioItems);
  }

  async ngOnInit(): Promise<void> {
    const {
      page, pages, skip, total, itemsPage
    } = await pagination(this.selectPage, this.itemsPerPage);
    this.portfolioItems = PORTFOLIO_ITEMS.slice(skip, (skip + (itemsPage - 1)))
  }

}
