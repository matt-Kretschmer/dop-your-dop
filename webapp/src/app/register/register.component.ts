import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ){

  }



  RegForm!: FormGroup;

  ngOnInit(){
    this.RegForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  get f() { return this.RegForm.controls};

  register(){
    let iusername = this.f['username'].value;
    let ipassword = this.f['password'].value;
    console.log(iusername + ipassword)
  }
}
