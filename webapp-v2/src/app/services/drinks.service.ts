import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  constructor(private http: HttpClient) {}

  async postDrink(username:string, drink:string, quantity:number){
    try {
      const time = new Date();
      const data = {
        username: username,
        drink: drink,
        quantity: quantity,
        time: time
       };

      // Send a POST request to the /user/register endpoint
      return this.http.post<any>('http://localhost:8080/user/register', data).toPromise();
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }

  async getDrinks(){
    return this.http.get<any>('http://localhost:8080/drinks').toPromise();
  }

  async getUsersDrinks(){
    const username = localStorage.getItem('username');
    return this.http.post<any>('http://localhost:8080/usersDrinks', {username}).toPromise();
  }
}
