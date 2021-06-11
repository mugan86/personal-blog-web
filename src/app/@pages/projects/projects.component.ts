import { Component, OnInit } from '@angular/core';
import { COURSES_OFFERS } from '@core/constants/online-courses';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  onlineCourses = COURSES_OFFERS;
  constructor() { }

  ngOnInit(): void {
  }

}
