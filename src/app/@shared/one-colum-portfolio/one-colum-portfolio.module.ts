import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumPortfolioComponent } from './one-colum-portfolio.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CustomTranslateLoader } from '@core/helpers/i18n';
import { FEATURE_DIRECTORIES_I18N } from '@core/constants/i18n';

export const createTranslateLoader = (http: HttpClient) => {
  return new CustomTranslateLoader(http, FEATURE_DIRECTORIES_I18N.shared);
};

@NgModule({
  declarations: [
    OneColumPortfolioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OneColumPortfolioComponent
  ],
})
export class OneColumPortfolioModule { }
