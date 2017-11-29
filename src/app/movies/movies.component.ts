import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

	userDoc: AngularFirestoreDocument<any>;
	movieDoc: AngularFirestoreDocument<any>;

	user: Observable<any>;
	movie: Observable<any>;

	constructor(private afs: AngularFirestore) { }

	ngOnInit() {
		this.userDoc = this.afs.doc('users/7lS3IYbFABciyZ5VZFm9YeSAePf1')
		this.movieDoc = this.afs.doc('movies/battlefield-earth')
		this.movie = this.movieDoc.valueChanges()
		this.user = this.userDoc.valueChanges()
	}

	get movieId() {
		return this.movieDoc.ref.id
	  }

	get userId() {
		return this.userDoc.ref.id
	}

}
