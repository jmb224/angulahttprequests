import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(@Inject('API_BASE_URL') private apiUrl: string, private http: HttpClient) { }

  create(post: Post) : Observable<any> {
    return this.http.post(`${this.apiUrl}/post.json`, post)
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<{[key: string]: Post}>(`${this.apiUrl}/post.json`).pipe(
      map(((data) => {
        const post_array = []

        for (const [key, value] of Object.entries(data)) {
          post_array.push({id: key, ...value})
        }
        return post_array
      }))
    )
  }
}
