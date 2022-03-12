import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';
import { COURSES_OFFERS } from '@core/constants/online-courses';
import { SELECT_APP_LANGUAGE } from '@core/constants/i18n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  onlineCourses = COURSES_OFFERS;
  coupon: {code: string, active: boolean, data_finish: string} = GENERAL.coupon;
  constructor(private translate: TranslateService) { 
    this.translate.use(SELECT_APP_LANGUAGE)
  }
}
