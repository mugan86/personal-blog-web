import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    NewsletterComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    NewsletterComponent
  ],
})
export class NewsletterModule { }
