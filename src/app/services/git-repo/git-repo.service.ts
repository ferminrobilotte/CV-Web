import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  apiUrl = "https://api.github.com/users/ferminrobilotte/repos"
  constructor(private _http : HttpClient) { }

  getRepos(){
    return this._http.get(this.apiUrl);
  }
}
