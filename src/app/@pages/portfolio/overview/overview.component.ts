import { PORTFOLIO_ITEMS } from '@core/constants/portfolio';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { IInfoCard } from '@core/interfaces/info-card.interface';
import { shuffled } from '@core/helpers/random-array-values';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements AfterViewInit {
  portfolioItems: any;
  itemsPerPage = 4;
  infoElements = shuffled(PORTFOLIO_ITEMS);

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      console.log(this.infoElements)
      this.infoElements = shuffled(PORTFOLIO_ITEMS);
    });
  }

  loadData = ($event: Array<IInfoCard>) => {
    setTimeout(() => {
      this.portfolioItems = $event;
    });
  };

  /*ngOnDestroy(): void {
    this.portfolioItems.length = 0;
    this.infoElements.length = 0;
  }*/
}
