import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(public authService: AuthService, private router: Router) {}
	
	logout() {
		this.authService.logout();
	}

	ngOnInit() {
		
	}

}
