import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LandingComponent } from '../../view/landing/landing.component';

@Component({
  selector: 'app-sign-in-social',
  templateUrl: './sign-in-social.component.html',
  styleUrls: ['./sign-in-social.component.scss']
})
export class SignInSocialComponent implements OnInit {

  loggedIn: boolean;
  userLogin: any = null;

  constructor(private _snackBar: MatSnackBar, private landing: LandingComponent) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

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
          console.log(userInfo);
          this.landing.getPersonalized(this.userLogin);
        });
      } else {
        this.openSnackBar('Perdimos la conexión con facebook', ':)');
      }
    }, { scope: 'public_profile,user_gender,email,user_age_range,user_birthday,user_location' });
  }

}
