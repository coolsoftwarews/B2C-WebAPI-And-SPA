import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AccountInfo, InteractionStatus, IPublicClientApplication } from '@azure/msal-browser';
import { filter, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from './model-contracts';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //get notified when login is complete
  private loggedInSubject$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn$: Observable<boolean> = this.loggedInSubject$.asObservable();

  //get project details
  private profileSubject$:BehaviorSubject<IUser> = new BehaviorSubject(undefined);
  public  profile$: Observable<IUser> = this.profileSubject$.asObservable();

  //mainly used when wanting to auto login
  private canLogInSubject$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  public canLogIn$: Observable<boolean> = this.canLogInSubject$.asObservable();

  private profile: IUser;

  // purpose of flag is to prevent attempts to login more than once or,
  // when another login attempt is in progress
  private canLogin: boolean = false; 

  constructor(
    private _msalService: MsalService,
    private _msalBroadcastService: MsalBroadcastService,
    private _profileService: ProfileService,
    private _router : Router
  )
  { 

    //check and set logged in status
    this._msalBroadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
    )
    .subscribe((x) => {

      this.checkAndSetActiveAccount();
    
      if(!this.canLogin && !this.isLoggedIn())
      {
          this.canLogin = true;
          this.canLogInSubject$.next(true);
      }
    });
    
    //get profile when logged in
    this.loggedIn$.subscribe(status=>
      {
         if(status)
         {
            if(this.profile)
            {
                this.profileSubject$.next(this.profile);

            } else {

            this._profileService.getLoggedInProfile().subscribe(profile=>{
                this.profile = profile;

                this.profileSubject$.next(profile);
 
            });
         }
        }
      });
  }


  //only required for internal use
  private checkAndSetActiveAccount(){

    let activeAccount = this._msalService.instance.getActiveAccount();

    if (!activeAccount && this._msalService.instance.getAllAccounts().length > 0) {

      this._msalService.instance.setActiveAccount(
            this._msalService.instance.getAllAccounts()[0]
        );
      
      this.loggedInSubject$.next(true);
    }
    
    return activeAccount;
  }

  loggedInAccount(): AccountInfo
  {
      return this.checkAndSetActiveAccount();
  }

  //only required for internal use.
  //use the observable instance for public accesss
  private isLoggedIn(): boolean
  {
      return this.checkAndSetActiveAccount() !== null;
  }

  login()
  {
    if(this.canLogin)
    {
      this.canLogin = false;
      this._msalService.loginRedirect();
    }
  }

  logout() {

    this.canLogin = false;
    this._msalService.logout();
  }
}
