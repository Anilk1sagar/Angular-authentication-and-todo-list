import { Injectable } from "@angular/core";
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

//import { Observable } from 'rxjs/Observable';
import { Observable } from "rxjs";
import 'rxjs/add/operator/switchMap';
import { User } from '../models/user';

@Injectable()
export class AuthService {

	user: Observable<User>;

	authState: any = null;
	constructor(private firebaseAuth: AngularFireAuth,
				private afs: AngularFirestore,
				private router: Router,
				private mdlSnackbarService: MdlSnackbarService,) {
		////Get auth data, then get firestore user document || null
		this.user = this.firebaseAuth.authState
			.switchMap(user => {
				if (user) {
					return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
				} else {
					return Observable.of(null)
				}
			});
	}

	// Returns true if user is logged in
	get authenticated(): boolean {
		return this.authState !== null;
	}

	//for Redirection after Login
	loginRedirect() {
		Observable.interval()
		.take(1)
		.subscribe(() => {
			this.router.navigate(['/home']);
		});
	}

	///Google sign in
	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.oAuthLogin(provider);
	}

	///Facebook sign in
	facebookLogin() {
		const provider = new firebase.auth.FacebookAuthProvider()
		return this.oAuthLogin(provider);
	}


	//Providers
	private oAuthLogin(provider) {
		return this.firebaseAuth.auth.signInWithPopup(provider)
			.then((credential)=> {
				this.authState = credential.user;
				this.updateUserData(credential.user)
			})
			.catch(error => console.log("Google Login error: " + error));
	}


	// Email Sign up
	signup(email:string, password:string) {
		return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
			.then(user => {
				this.mdlSnackbarService.showToast("Signup Success!", 4000);
				return this.updateUserData(user); // create initial document
			})
			.catch(error => {
				this.mdlSnackbarService.showToast("Error | " + error, 4000);
			});
	}

	
	// Email Login
	login(email:string, password:string) {
		return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
			.then(user => {
				this.authState = user;
				this.updateUserData(user);
				this.mdlSnackbarService.showToast("Login Success!", 4000);
			})
			.catch(error => {
				console.log(error);
				this.mdlSnackbarService.showToast("Error | " + error, 4000);
			});
	}


	// Update properties on the user document
	updateUser(user: User, data: any) { 
		return this.afs.doc(`users/${user.uid}`).update(data);
	}


	private updateUserData(user) {
		// Sets user data to firestore on login
		const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

		const data: User = {
			uid: user.uid,
			email: user.email,
			password: user.password,
			displayName: user.displayName,
			photoURL: user.photoURL
		}
		this.router.navigate(['/home']);
		//return userRef.set(data);
		return  userRef.update(data)
		.then(() => {
		  // update successful (document exists)
		  	console.log('User exists');
		})
		.catch((error) => {
		  	//console.log('Error updating user', error); // (document does not exists)
		  	userRef.set(data);
		})
	}


	logout() {
		this.firebaseAuth.auth.signOut();
		this.router.navigate(['/login']);
	}
	
}