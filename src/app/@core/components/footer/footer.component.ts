import { I18nService } from './../../services/i18n.service';
import { Component, OnInit } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  title=GENERAL.title;
  selectLanguage = ''
  constructor(private i18nService: I18nService) {  }

  ngOnInit(): void {
    this.selectLanguage = this.i18nService.getLanguage();
  }

  changeLanguage = (language: string) => {
    this.i18nService.selectLanguage(language);
    this.selectLanguage = language;
  }

}
