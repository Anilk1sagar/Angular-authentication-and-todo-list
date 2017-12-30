import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core';
import { Router } from '@angular/router';

@Injectable()
export class ProfileService {
	
	userDoc: AngularFirestoreDocument<User>;

  	constructor( public afs:AngularFirestore, private mdlSnackbarService: MdlSnackbarService) {
	}
	  
	// Update user data
	updateUserData(user: User) {
		//Adding path to particular user id in document
		this.userDoc = this.afs.doc(`users/${user.uid}`);
		//Update the userdata by using update function in the collection
		console.log("User detailes: " + user + "User id: " + user.uid);
		this.userDoc.update(user).then(user => {
			this.mdlSnackbarService.showToast("Profile Update successfull !", 4000)
		})
		.catch(error => {
			this.mdlSnackbarService.showToast("Error | " + error, 4000);
		});
		
	}

}
