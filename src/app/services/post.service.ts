import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post';

@Injectable()
export class PostService {

	postCollection:AngularFirestoreCollection<Post>;
	posts: Observable<Post[]>;
	postDoc: AngularFirestoreDocument<Post>;

  	constructor(public afs:AngularFirestore) {
		//this.posts = this.afs.collection('posts').valueChanges();
		this.postCollection = this.afs.collection('posts', ref => ref.orderBy('title', 'asc'));

		this.posts = this.postCollection.snapshotChanges().map(changes => {
			return changes.map(a => {
				const data = a.payload.doc.data() as Post;
				data.id = a.payload.doc.id;
				return data;
			});
		});
	}

	getPosts() {
		return this.posts;
	}

	//Add post
	addPost(post: Post) {
		this.postCollection.add(post);
	}

	// Update Post
	updatePost(post: Post) {
		//Adding path to particular post id in document
		this.postDoc = this.afs.doc(`posts/${post.id}`);
		//Update the post by using update function in the collection
		this.postDoc.update(post);
	}

	// Delete Post
	deletePost(post: Post) {
		//Adding path to particular post id in document
		this.postDoc = this.afs.doc(`posts/${post.id}`);
		//Deleting the post by using delete function in the collection
		this.postDoc.delete();
	}

}
