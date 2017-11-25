import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}, //canActivate: [AuthGuard]
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);