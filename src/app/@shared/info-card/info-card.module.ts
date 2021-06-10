import { RouterModule } from '@angular/router';
import { BadgeModule } from './../badge/badge.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';

@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    BadgeModule,
    RouterModule
  ],
  exports: [
    InfoCardComponent
  ],
})
export class InfoCardModule { }
