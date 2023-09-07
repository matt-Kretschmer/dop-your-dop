import { Component, OnInit } from '@angular/core';
import { HeaderConfigModel } from '../models/shared.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  headerConfig!: HeaderConfigModel;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.headerConfig = {
      headerText: 'Login',
      buttonContent:'Register',
      action: () => {
        console.log('clicked')
        this.router.navigate(['/register'])
      }
    }
  }  

  login(){
    this.router.navigate(['/home']);
  }
}
