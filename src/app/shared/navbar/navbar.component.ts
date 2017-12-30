import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(public authService: AuthService,private router: Router) { }

	ngOnInit() {
	}

	/// For logout
	logout() {
		this.authService.logout();
	}

}
