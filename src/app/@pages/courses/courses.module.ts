import { InfoCardModule } from '@shared/info-card/info-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CustomTranslateLoader } from '@core/helpers/i18n';
import { FEATURE_DIRECTORIES_I18N } from '@core/constants/i18n';

export const createTranslateLoader = (http: HttpClient) => {
  return new CustomTranslateLoader(http, FEATURE_DIRECTORIES_I18N.courses);
};

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    InfoCardModule,
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
export class CoursesModule { }
