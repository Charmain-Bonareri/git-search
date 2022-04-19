import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  foundRepo: Repo;


  constructor(private http: HttpClient) {
    this.foundRepo = new Repo(0,0,'', new Date());
  }
  async getRepo(username: string) {
    const searchUser = this.http.get<Repo>(
      `${environment.apiurl}/users/${username}/repos`
    );
    return await lastValueFrom(searchUser).then((result) => {
      console.log(result);
      return result;
    });
  }
}
