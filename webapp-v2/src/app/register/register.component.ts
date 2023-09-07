import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderConfigModel } from '../models/shared.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  headerConfig!: HeaderConfigModel;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.headerConfig = {
      headerText: 'Register',
      buttonContent:'Login',
      action: () => {
        console.log('clicked')
        this.router.navigate(['/login'])
      }
    }
  }

  register(){
    this.router.navigate(['/home']);
  }
}
