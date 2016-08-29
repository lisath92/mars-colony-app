import { Injectable } from '@angular/core';
import { IPosts } from '../../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService {
  postUrl='http://fourth.academy.red/wp-json/wp/v2/posts';

  constructor(private http: Http){}

  getPosts(): Promise<IPosts> {
    return this.http.get(this.postUrl)
    .toPromise().then(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred!', error);
    return Promise.reject(error.message|| error)
  }
}