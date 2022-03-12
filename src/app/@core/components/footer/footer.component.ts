import { Component, OnInit } from '@angular/core';
import { GENERAL } from '@core/constants/general-configs';
import { LanguageSelectService } from '@core/services/language-select.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  title=GENERAL.title;
  selectLanguage = ''
  constructor(private languageSelectService: LanguageSelectService,
    private translate: TranslateService) {  }

  ngOnInit(): void {
    this.selectLanguage = this.languageSelectService.getLanguage();
    this.languageSelectService.language.subscribe((languageSelect) => {
      console.log(languageSelect);
      this.translate.use(languageSelect);
    })
  }

  changeLanguage = (language: string) => {
    this.languageSelectService.change(language);
    this.translate.use(language);
    this.selectLanguage = language;
  }

}
