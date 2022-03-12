import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageSelectService {
  language$ = new BehaviorSubject<string>(localStorage.getItem('language') || 'es') ;
  
  constructor() { }
  get language() {
    return this.language$.asObservable();
  }

  change = (language: string = 'es') => {
    localStorage.setItem('language', language);
    this.language$.next(language);
  };

  getLanguage = () => localStorage.getItem('language') || 'es';
}
