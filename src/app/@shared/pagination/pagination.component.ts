import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInfoCard } from '@core/interfaces/info-card.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('itemsPerPage') itemsPerPage = 5;
  @Input('infoElements') infoElements: Array<IInfoCard> = [];
  total = 1;
  currentPage = 1;
  optionsConfig = {
    page: this.currentPage,
    total: 1,
    skip: 0,
    itemsPage: this.itemsPerPage,
    pages: 1,
  };
  @Output() showInfoElements = new EventEmitter<Array<IInfoCard>>();
  constructor() {}

  ngOnInit(): void {
    this.optionsConfig = this.pagination(this.currentPage, this.itemsPerPage);
    const showInfo = this.infoElements.slice(
      this.optionsConfig.skip,
      this.optionsConfig.skip + (this.optionsConfig.itemsPage)
    );
    this.showInfoElements.emit(showInfo);
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.ngOnInit();
  }

  pagination(page: number = 1, itemsPage: number = 20, filter: object = {}) {
    // Comprobar el numero de items por pagina
    if (itemsPage < 1 || itemsPage > 10) {
      itemsPage = 10;
    }
    if (page < 1) {
      page = 1;
    }
    const total = this.infoElements.length; // Habría que aplicar  filtros, ahora coge todo
    const pages = Math.ceil(total / itemsPage);
    return {
      page,
      skip: (page - 1) * itemsPage,
      itemsPage,
      total,
      pages,
    };
  }
}
