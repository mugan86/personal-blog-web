import { Component, OnInit } from '@angular/core';
import { COURSES_OFFERS } from '@core/constants/online-courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  onlineCourses = COURSES_OFFERS;
  constructor() { }

  ngOnInit(): void {
  }

}
