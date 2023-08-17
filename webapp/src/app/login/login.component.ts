import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService
  ){

  }
  login(){
    this.authService.login().then((data) => {
      console.log(data)
    }).catch((e) => {
      console.error(e)
    })
  }
}
