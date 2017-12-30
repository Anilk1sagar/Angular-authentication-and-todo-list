import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [moveIn(), fallIn(), moveInLeft()],
	host: {'[@moveIn]': ''}
})
export class HomeComponent implements OnInit {

	constructor(
		public authService: AuthService,
		private router: Router,
		private mdlSnackbarService: MdlSnackbarService) {}

	ngOnInit() {
		
	}

}
