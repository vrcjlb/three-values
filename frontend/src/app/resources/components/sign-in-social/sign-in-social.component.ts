import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
// import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-sign-in-social',
  templateUrl: './sign-in-social.component.html',
  styleUrls: ['./sign-in-social.component.scss']
})
export class SignInSocialComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;


  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

  signInWithFB(): void {
    const fbLoginOptions = {
      scope: 'public_profile,user_gender,email,user_age_range,user_birthday,user_location'
    }
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
