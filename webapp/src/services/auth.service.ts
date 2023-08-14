import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ExampleDateModel } from 'src/models/example.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  login():Promise<ExampleDateModel | undefined>{
    return this.apiService.get('','','');
  }
}
