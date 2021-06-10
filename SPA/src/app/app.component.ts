import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from './shared/auth.service';
import { IUser } from './shared/model-contracts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isIframe = false;
  profile: IUser;
  
  private subscriptions: Subscription[] = [];

  constructor(
        private _msalService: MsalService,
        private _authService: AuthService
  ) { }
 

  ngOnInit() {
    
    this.isIframe = window !== window.parent && !window.opener;
    
    document.documentElement.style.fontSize = 13 + 'px';

      this._msalService.instance.handleRedirectPromise().then(x=>{
        if(x !== null && x.account !== null)
        {
            console.log(x.account);
            this._msalService.instance.setActiveAccount(x.account);
        }


        this._authService.profile$.subscribe(x=>{
          console.log(x);
          this.profile = x;
        });
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(function (sub) {
      sub.unsubscribe();
    });
  }

  login()
  {
      this._authService.login();
  }

  logout(){
      this._authService.logout();
  }

  
}
