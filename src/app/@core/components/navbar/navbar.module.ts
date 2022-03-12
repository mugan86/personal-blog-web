import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, RouterModule, TranslateModule.forChild()],
  exports: [NavbarComponent],
})
export class NavbarModule {}
