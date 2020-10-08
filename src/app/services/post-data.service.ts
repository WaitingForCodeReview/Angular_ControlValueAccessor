import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  posts: Post[]

  private folder: string = 'assets'
  private fileName: string = 'posts.json'

  constructor(private http: HttpClient) { }

  getUrl(): string {
    return `${this.folder}/${this.fileName}`;
  }

  getPostsStream(url: string = this.getUrl()): Observable<Post[]> {
    return this.http.get<Post[]>(url);
  }
}
