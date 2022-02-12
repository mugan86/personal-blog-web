import { PORTFOLIO_ITEMS } from './../../../@core/constants/portfolio';
import { Component, OnInit } from '@angular/core';
import { IInfoCard } from '@core/interfaces/info-card.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  portfolioItems: Array<IInfoCard> =  PORTFOLIO_ITEMS;
  constructor() { 
    console.log(this.portfolioItems);
  }

  ngOnInit(): void {
  }

}
