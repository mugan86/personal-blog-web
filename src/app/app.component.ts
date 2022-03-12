import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-blog-anartz';
  selectedLanguage = localStorage.getItem('language') || 'es';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }
}
