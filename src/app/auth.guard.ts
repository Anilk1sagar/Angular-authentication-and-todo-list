import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
	
	constructor(private auth: AngularFireAuth, private authService:AuthService, private router: Router){}
	check: boolean = true;
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot):Observable<boolean> {
			return this.auth.authState
			.take(1)
			.map(authState => !!authState)
			.do(auth => !auth ? this.router.navigate(['/login']) : true);
	}
	
}
