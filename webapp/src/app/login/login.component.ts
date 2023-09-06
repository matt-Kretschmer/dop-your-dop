import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ){

  }

  loginForm!: FormGroup;

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
 
  get f() { return this.loginForm.controls};

  login(){

    let iusername = this.f['username'].value;
    let ipassword = this.f['password'].value;
   

    this.authService.login().then((data) => {
      console.log(data)
    }).catch((e) => {
      console.error(e)
    })
  }
}
