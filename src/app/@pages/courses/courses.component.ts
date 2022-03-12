import { Component } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';
import { SELECT_APP_LANGUAGE } from '@core/constants/i18n';
import { COURSES_OFFERS } from '@core/constants/online-courses';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  onlineCourses = COURSES_OFFERS;
  coupon: {code: string, active: boolean, data_finish: string} = GENERAL.coupon;

  constructor(private translate: TranslateService) { 
    this.translate.use(SELECT_APP_LANGUAGE)
  }

}
