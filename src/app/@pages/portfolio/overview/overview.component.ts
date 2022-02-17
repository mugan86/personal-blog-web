import { PORTFOLIO_ITEMS } from '@core/constants/portfolio';
import { Component, AfterViewInit } from '@angular/core';
import { IInfoCard } from '@core/interfaces/info-card.interface';
import { shuffled } from '@core/helpers/random-array-values';
import { arrayNumberFromRange, technologiesList } from '@core/helpers/filters-values';
import { TAGS_ITEMS } from '@core/constants/tags';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements AfterViewInit {
  showItems: any;
  currentPage = 1;
  itemsPerPage = 4;
  infoElements = shuffled(PORTFOLIO_ITEMS);
  pagination = this.infoElements.map((a) => {
    return { ...a };
  });
  public query: string = '';
  filtersByYear = arrayNumberFromRange(2012, new Date().getFullYear());
  filtersByTechnologies = technologiesList();

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.infoElements = shuffled(PORTFOLIO_ITEMS);
    });
  }

  loadData = ($event: Array<IInfoCard>) => {
    setTimeout(() => {
      this.showItems = $event;
    });
  };

  changePage = (page: number) => this.currentPage = page;

  searchData = (event: string) => {
    this.currentPage = (this.currentPage > 1) ? 1 : this.currentPage;
    if (event === '') { // Reset
      this.pagination = this.infoElements.map((a) => {
        return { ...a };
      });
    } else { // Filter
      const results = this.infoElements.filter((obj: { title: string }) => {
        return JSON.stringify(obj).toLowerCase().includes(event.toLowerCase());
      });
      // console.log(results);
      this.pagination = results.map((a) => {
        return { ...a };
      });
    }

    this.loadData(this.pagination);
  };
}
