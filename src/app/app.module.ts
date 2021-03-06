import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { ProfileService } from './services/profile.service';
import { routes } from './app.routes';
import { AuthGuard } from './auth.guard';

import { MdlModule } from '@angular-mdl/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { MoviesComponent } from './movies/movies.component';
import { StarReviewComponent } from './star-review/star-review.component';
import { StarService } from './services/star.service';
import { PostsComponent } from './blog/posts/posts.component';
import { AddPostComponent } from './blog/add-post/add-post.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export const firebaseConfig = {
	production: false,
	apiKey: "AIzaSyDUP3PCEOllOH5h_Tf0wpK52WnKvCok8oU",
	authDomain: "matarialdesign.firebaseapp.com",
	databaseURL: "https://matarialdesign.firebaseio.com",
	projectId: "matarialdesign",
	storageBucket: "matarialdesign.appspot.com",
	messagingSenderId: "67460874404"
};


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		SignupComponent,
		UserProfileComponent,
		MoviesComponent,
		StarReviewComponent,
		PostsComponent,
		AddPostComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule,
		routes,
		MdlModule,
	],
	providers: [AuthService, AuthGuard, AngularFireDatabase, StarService, PostService, ProfileService],
	bootstrap: [AppComponent]
})
export class AppModule { }
