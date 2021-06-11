import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { InfoCardModule } from '@shared/info-card/info-card.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    InfoCardModule
  ]
})
export class ProjectsModule { }
