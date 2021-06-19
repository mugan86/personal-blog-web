import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  language: string = 'es';
  constructor(private trasloco: TranslocoService) { }

  selectLanguage(language: string = this.language) {
    this.trasloco.setActiveLang(language);
  }
}
