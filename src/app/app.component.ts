import { Component } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	constructor(
		public authService: AuthService,
		private router: Router,) {}

	/// For logout
	logout() {
		this.authService.logout();
	}
}
