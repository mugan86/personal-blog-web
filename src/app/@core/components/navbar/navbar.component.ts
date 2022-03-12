import { GENERAL } from './../../constants/general-configs';
import { Component } from '@angular/core';
import menuItemsList from '@data/menus/public.json';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = GENERAL.title;
  menuItems = menuItemsList;
  currentRoute = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
