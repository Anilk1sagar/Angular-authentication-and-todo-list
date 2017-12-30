import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Star {
	userEmail: any;
	movieId: any;
	value: number;
}

@Injectable()
export class StarService {

	constructor(private afs: AngularFirestore) { }

	// Star reviews that belong to a user
	getUserStars(userEmail) {
		const starsRef = this.afs.collection('stars', ref => ref.where('userEmail', '==', userEmail) );
		return starsRef.valueChanges();
	}
	
	// Get all stars that belog to a Movie
	getMovieStars(movieId) {
		const starsRef = this.afs.collection('stars', ref => ref.where('movieId', '==', movieId) );
		return starsRef.valueChanges();
	}

	// Create or update star
	setStar(userEmail, movieId, value) {
		// Star document data
		const star: Star = { userEmail, movieId, value };
		// Custom doc ID for relationship
		const starPath = `stars/${star.userEmail}_${star.movieId}`;
		// Set the data, return the promise
		return this.afs.doc(starPath).set(star)
	}

}
