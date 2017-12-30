import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { AuthService } from '../../services/auth.service';
import { moveIn, fallIn } from '../../router.animations';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
	animations: [moveIn(), fallIn()],
	host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

	email: string;
	password: string;

	constructor(public authService: AuthService) {
		//this.authService.loginRedirect();
	}

	signup() {
		this.authService.signup(this.email, this.password);
		this.email = this.password = '';
	}

	ngOnInit() {
	}

}
