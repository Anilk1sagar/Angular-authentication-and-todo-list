import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AuthService } from '../../services/auth.service';



@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;
	
	constructor(public authService: AuthService) {
		//this.check();
		
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
