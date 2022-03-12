import { TranslateService } from '@ngx-translate/core';
import { PORTFOLIO_ITEMS } from '@core/constants/portfolio';
import { Component, AfterViewInit } from '@angular/core';
import { IInfoCard } from '@core/interfaces/info-card.interface';
import { shuffled } from '@core/helpers/random-array-values';
import {
  arrayNumberFromRange,
  technologiesList,
} from '@core/helpers/filters-values';
import { LanguageSelectService } from '@core/services/language-select.service';

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
  btnDetails = '';
  btnCode = '';

  constructor(
    private languageSelectService: LanguageSelectService,
    private translate: TranslateService
  ) {
    this.languageSelectService.language.subscribe((languageSelect) => {
      this.translate.use(languageSelect);
    });
  }

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

  changePage = (page: number) => (this.currentPage = page);

  searchData = (
    event: string,
    filters: {
      tag: string;
      value?: string | number;
    } = { tag: '' }
  ) => {
    console.log(this.query, filters);
    this.currentPage = this.currentPage > 1 ? 1 : this.currentPage;
    if (event === '') {
      // Reset
      this.pagination = this.infoElements.map((a) => {
        return { ...a };
      });
    } else {
      // Filter
      let results: Array<IInfoCard> = [];
      if (filters.tag === '') {
        results = this.infoElements.filter((obj: { title: string }) => {
          return JSON.stringify(obj)
            .toLowerCase()
            .includes(event.toLowerCase());
        }); // console.log(results);
      } else if (filters.tag === 'year') {
        console.log('Filt by filter options - year');
      } else if (filters.tag === 'tech') {
        console.log('Filt by filter options - technology');
      }
      this.pagination = results.map((a) => {
        return { ...a };
      });
    }

    this.loadData(this.pagination);
  };

  selectUnselectOptions = (
    event: Event,
    filtType: string,
    value: string | number | boolean
  ) => {
    console.log((event.target as HTMLInputElement).checked, filtType, value);
    this.searchData(this.query, {
      tag: filtType,
      value: String(value),
    });
  };
}
