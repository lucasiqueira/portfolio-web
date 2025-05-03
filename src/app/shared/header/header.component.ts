import { Component } from '@angular/core';
import { LogoComponent } from "./logo/logo.component";
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent,
    NavMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
