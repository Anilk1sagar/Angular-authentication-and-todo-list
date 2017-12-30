import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	posts: Post[];
	editState: boolean = false;
	postToEdit: Post;

	constructor(private postService:PostService) { }

	ngOnInit() {
		this.postService.getPosts().subscribe(posts => {
			//console.log(posts);
			this.posts = posts;
		});
	}

	deletePost(event, post: Post) {
		this.clearState();
		this.postService.deletePost(post);
	}

	editPost(event, post: Post) {
		this.editState = true;
		this.postToEdit = post;
	}

	updatePost(post: Post) {
		this.postService.updatePost(post);
		this.clearState();
	}

	clearState() {
		this.editState = false;
		this.postToEdit = null;
	}

}
