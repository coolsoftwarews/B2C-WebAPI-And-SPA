import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment} from 'src/environments/environment';
import { IUser } from './model-contracts';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl: string;

  constructor(
    private http: HttpClient
    ) {
    this.profileUrl = environment.urlAddress + '/api/profile';
  }

  getLoggedInProfile() : Observable<IUser>
  {
    //todo: need to change the profile service 
    return this.http.get<IUser>(`${this.profileUrl}`);
  }
}
