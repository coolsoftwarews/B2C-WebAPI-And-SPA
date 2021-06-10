import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { IUser } from '../shared/model-contracts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: IUser;

  constructor( 
    private _authService: AuthService
    ) {  }

  ngOnInit(): void {
    this._authService.profile$.subscribe(x=>{
      console.log(x);
      this.profile = x;
    });
  
  }

}
