import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  language: string = 'es';
  constructor(private translate: TranslateService) { }

  selectLanguage(language: string = this.language) {
    this.translate.setDefaultLang(language);
  }
}
