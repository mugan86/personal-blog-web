import { TestimonialsModule } from '@shared/testimonials/testimonials.module';
import { HeaderModule } from '@core/components/header/header.module';
import { NewsletterModule } from '@shared/newsletter/newsletter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfoCardModule } from '@shared/info-card/info-card.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { FEATURE_DIRECTORIES_I18N } from '@core/constants/i18n';
import { CustomTranslateLoader } from '@core/helpers/i18n';

export const createTranslateLoader = (http: HttpClient) => {
  return new CustomTranslateLoader(http, FEATURE_DIRECTORIES_I18N.home);
};

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    InfoCardModule,
    NewsletterModule,
    TestimonialsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ]
})
export class HomeModule { }
