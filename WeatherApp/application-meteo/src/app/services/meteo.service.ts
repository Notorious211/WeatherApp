import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private apiUrl = 'https://api.openweathermap.org/data/3.0/onecall';
  private apiKey = 'd30d0f6b722b3e8771a916139068ca12';

  constructor(private http: HttpClient) { }

  getWeather(lat: string, lon: string): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${this.apiKey}&units=metric&lang=fr`;
    return this.http.get(url);
  }
}
