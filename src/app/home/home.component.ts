import { Component, OnInit } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	todos$: FirebaseListObservable<any[]>;
	todo = "";
	newTodoValue:any = "";

	constructor(
		private af: AngularFireDatabase,
		public authService: AuthService,
		private router: Router,
		private mdlSnackbarService: MdlSnackbarService) {}
	
	/// For logout
	logout() {
		this.authService.logout();
	}

	/// Adding todo
	addTodo(value: string): void {
		this.todos$.push({ content: value, done: false });
		this.todo = ""; //clear the text feild after adding item
	}

	/// Deleting todo
	deleteTodo(todo: any): void {
		this.af.object('/todos/' + todo.$key).remove()
		.then(todo => {
			this.mdlSnackbarService.showToast("Delete Todo Successfull !", 4000);
		})
		.catch(error => {
			this.mdlSnackbarService.showToast("Error | " + error, 4000);
		});
	}

	updateTodoData(todo) {
		this.newTodoValue = prompt("Update your Todo List");
		if(this.newTodoValue != null) {
			this.updateTodo(todo, this.newTodoValue);
		}
	}

	updateTodo(todo: any, newValue: string): void {
		this.af.object('/todos/' + todo.$key)
		.update({ content: newValue, done: todo.done })
		.then(todo => {
			this.mdlSnackbarService.showToast("Update Todo Successfull !", 4000);
		})
		.catch(error => {
			this.mdlSnackbarService.showToast("Error | " + error, 4000);
		});
	}

	ngOnInit() {
		this.todos$ = this.af.list('/todos');
	}

}
