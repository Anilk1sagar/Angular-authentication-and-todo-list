import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AuthService } from '../../services/auth.service';
import { moveIn } from '../../router.animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [moveIn()],
	host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;
	
	constructor(public authService: AuthService) {
		this.authService.loginRedirect();	
	}

	login() {
		this.authService.login(this.email, this.password);
		this.email = this.password = '';
	}

	googleLogin() {
		this.authService.googleLogin();
	}

	facebookLogin() {
		this.authService.facebookLogin();
	}

	ngOnInit() {
		
	}

}
