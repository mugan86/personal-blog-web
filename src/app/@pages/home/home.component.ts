import { Component, OnInit } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';
import { COURSES_OFFERS } from '@core/constants/online-courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  onlineCourses = COURSES_OFFERS;
  coupon: {code: string, active: boolean, data_finish: string} = GENERAL.coupon;
  constructor() { }

  ngOnInit(): void {
  }

}
