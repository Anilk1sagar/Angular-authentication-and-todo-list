import { Component, OnInit, Input } from '@angular/core';
import { StarService } from '../services/star.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-star-review',
	templateUrl: './star-review.component.html',
	styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {

	@Input() userEmail;
	@Input() movieId;

	stars: Observable<any>;
	avgRating: Observable<any>;

	constructor(
		public authService: AuthService,
		private starService: StarService) { }

	ngOnInit() {
		this.stars = this.starService.getMovieStars(this.movieId)
		this.avgRating = this.stars.map(arr => {
		  const ratings = arr.map(v => v.value)
		  return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
		})
	}

	starHandler(value) {
		this.starService.setStar(this.userEmail, this.movieId, value)
	}

}
