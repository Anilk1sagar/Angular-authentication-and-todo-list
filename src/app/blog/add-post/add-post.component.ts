import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
	selector: 'app-add-post',
	templateUrl: './add-post.component.html',
	styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

	post: Post = {
		title: '',
		description: ''
	}

	constructor(private postService:PostService) { }

	ngOnInit() {
	}

	onSubmit() {
		if(this.post.title != '' && this.post.description != '') {
			this.postService.addPost(this.post);
			this.post.title = '';
			this.post.description = '';
		}
	}

}
