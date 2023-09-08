import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  async register(data:{username: string, password: string, email: string}): Promise<any> {
    try {
      // Define the request body
      const requestBody = {
        username: data.username,
        password: data.password,
        email: data.email,
      };

      // Send a POST request to the /user/register endpoint
      return this.http.post<any>('http://localhost:8080/user/register', requestBody).toPromise();
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }

  async login(username: string, password: string): Promise<any> {
    try {
      // Define the request body
      const requestBody = {
        username: username,
        password: password,
      };

      // Send a POST request to the /user/login endpoint
      return this.http.post<any>('http://localhost:8080/user/login', requestBody).toPromise();
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }
}
