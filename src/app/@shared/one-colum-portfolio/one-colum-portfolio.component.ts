import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SELECT_APP_LANGUAGE } from '@core/constants/i18n';
import { IInfoCard } from '@core/interfaces/info-card.interface';
import { LanguageSelectService } from '@core/services/language-select.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-one-colum-portfolio',
  templateUrl: './one-colum-portfolio.component.html',
  styleUrls: ['./one-colum-portfolio.component.scss'],
})
export class OneColumPortfolioComponent implements OnInit{
  @Input() info: IInfoCard = {
    title: 'Please you must be specify title',
    description: 'Please you must be specify description',
    price: 0,
  };
  @Input() externalRouter = '-';
  @Input() btnDetailsLabel = 'button.details';
  @Input() btnExternalLabel = 'button.code';
  
  constructor(
    private router: Router,
    private languageSelectService: LanguageSelectService,
    private translate: TranslateService
  ) {
    this.translate.use(SELECT_APP_LANGUAGE);
  }

  ngOnInit(): void {
    this.languageSelectService.language.subscribe((languageSelect) => {
      this.translate.use(languageSelect);
    });
  }

  showDetails = (id: number | undefined) =>
    this.router.navigate(['/portfolio/item', id]);

  openExternal = (externalUrl: string | undefined) =>
    window.open(externalUrl, '_blank');
}
