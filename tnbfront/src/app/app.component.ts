import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  shouldShowHeader(): boolean {
    // Check if the current route is not the login route
    return !this.router.url.includes('/login');
  }


  title = 'taxe_tnb_front';
}
