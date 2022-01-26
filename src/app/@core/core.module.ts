import { FooterModule } from './components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { TitleCaseWordPipe } from './pipes/title-case-word.pipe';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    NavbarModule
  ],
  exports: [
    FooterModule,
    NavbarModule,
    TitleCaseWordPipe
  ],
  declarations: [
    TitleCaseWordPipe
  ]
})
export class CoreModule { }