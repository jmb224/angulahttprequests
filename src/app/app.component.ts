import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from './servives/post.service';

export interface Post {
  id?: string
  title: string,
  content: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private _postServ: PostService) {}

  ngOnInit() {

    // console.log('APIRUL: ', this.apiUrl)
    this.onFetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this._postServ.create(postData).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onFetchPosts() {
    // Send Http request
    this._postServ.getPosts().subscribe(
      (request_data) => {
       this.loadedPosts = request_data
      }
    )
  }

  onClearPosts() {
    // Send Http request
  }
}
