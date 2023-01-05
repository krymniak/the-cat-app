import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-cat-app';

	constructor(
		public auth: AuthService,
		private _router: Router) {

	}

	logout() {
    event?.preventDefault()
    this.auth.logout()
    this._router.navigate(['/login'])
  }
}
