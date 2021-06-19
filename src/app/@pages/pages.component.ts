import { I18nService } from './../@core/services/i18n.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private i18n: I18nService) { }

  ngOnInit(): void {
    
  }

}
