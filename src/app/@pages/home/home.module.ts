import { NewsletterModule } from './../../@shared/components/newsletter/newsletter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfoCardModule } from '@shared/info-card/info-card.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfoCardModule,
    NewsletterModule
  ]
})
export class HomeModule { }
