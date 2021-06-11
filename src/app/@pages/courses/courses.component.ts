import { Component, OnInit } from '@angular/core';
import { COURSES_OFFERS } from '@core/constants/online-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  onlineCourses = COURSES_OFFERS;
  constructor() { }

  ngOnInit(): void {
  }

}
