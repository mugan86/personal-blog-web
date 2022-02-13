import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { EnumeratePipe } from '@core/pipes/enumerate.pipe';



@NgModule({
  declarations: [
    PaginationComponent,
    EnumeratePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent
  ],
})
export class PaginationModule { }
