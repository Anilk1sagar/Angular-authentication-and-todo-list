import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { User } from '../../models/user';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
	animations: [moveIn(), fallIn(), moveInLeft()],
	host: {'[@moveIn]': ''}
})
export class UserProfileComponent implements OnInit {

	constructor(private profileService:ProfileService, private authService: AuthService) { }

	ngOnInit() {
	}

	updateUserData(user: User) {
		this.profileService.updateUserData(user);
	}

}
