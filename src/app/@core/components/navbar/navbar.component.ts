import { GENERAL } from './../../constants/general-configs';
import { Component } from '@angular/core';
import menuItemsList from '@data/menus/public.json';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title=GENERAL.title
  menuItems = menuItemsList
}
