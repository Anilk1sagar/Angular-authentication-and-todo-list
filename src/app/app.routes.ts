import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { MoviesComponent } from './movies/movies.component';
import { PostsComponent } from './blog/posts/posts.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}, //canActivate: [AuthGuard]
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
    { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);