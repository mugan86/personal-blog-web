import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigInfoCardComponent } from './big-info-card.component';
import { BadgeModule } from '@shared/badge/badge.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BigInfoCardComponent],
  imports: [CommonModule, BadgeModule, RouterModule],
  exports: [BigInfoCardComponent],
})
export class BigInfoCardModule {}
