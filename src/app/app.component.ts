import { Component } from '@angular/core';

export class Menu {
  href: string;
  text: string;
}
const MENULIST: Menu[] = [
  { href: '/hero1', text: '1.Redirect to Top page' },
  { href: '/hero2', text: '2.The Hero Editor' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TUTORIAL : TOUR OF HEROES';
  menuList = MENULIST;
}
