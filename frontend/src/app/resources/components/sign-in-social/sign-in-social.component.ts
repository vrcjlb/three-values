import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-social',
  templateUrl: './sign-in-social.component.html',
  styleUrls: ['./sign-in-social.component.scss']
})
export class SignInSocialComponent implements OnInit {

  loggedIn: boolean;
  userLogin: any;
  constructor() { }

  ngOnInit() {
  }

  login() {
    window['FB'].login((response) => {
      console.log('login response', response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name, email, age_range, birthday, location, gender, religion, education, id'
        }, (userInfo) => {
          this.userLogin = userInfo;
          console.log("user information");
          console.log(userInfo);
        });
      } else {
        console.log('User login failed');
      }
    }, { scope: 'public_profile,user_gender,email,user_age_range,user_birthday,user_location' });
  }

}
