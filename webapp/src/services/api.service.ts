import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ExampleDateModel } from '../models/example.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string, apiVersion: string, data?: unknown): Promise<ExampleDateModel | undefined> {
    return this.http.get<ExampleDateModel >(`https://localhost:7217/WeatherForecast`).toPromise();
  }
}
